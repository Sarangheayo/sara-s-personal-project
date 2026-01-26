interface TimeTableRow {
  line: string;
  station: string;
  time: string;
  // ... other properties
}

/**
 * 시간표 데이터에서 중복된 행을 제거합니다.
 * 중복은 line, station, time을 기준으로 판단합니다.
 * @param rows 원본 시간표 데이터 배열
 * @returns 중복이 제거된 시간표 데이터 배열
 */
export const dedupRows = (rows: TimeTableRow[]): TimeTableRow[] => {
  const uniqueRows = new Map<string, TimeTableRow>();

  rows.forEach(row => {
    const key = `${row.line}-${row.station}-${row.time}`;
    if (!uniqueRows.has(key)) {
      uniqueRows.set(key, row);
    }
  });

  return Array.from(uniqueRows.values());
};
