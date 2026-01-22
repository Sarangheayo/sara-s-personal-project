import { useQuery } from "@tanstack/react-query";
import { api, buildUrl } from "@shared/routes";

export function usePhotos() {
  return useQuery({
    queryKey: [api.photos.list.path],
    queryFn: async () => {
      const res = await fetch(api.photos.list.path);
      if (!res.ok) throw new Error("Failed to fetch photos");
      return api.photos.list.responses[200].parse(await res.json());
    },
  });
}

export function usePhoto(id: number) {
  return useQuery({
    queryKey: [api.photos.get.path, id],
    queryFn: async () => {
      const url = buildUrl(api.photos.get.path, { id });
      const res = await fetch(url);
      if (res.status === 404) return null;
      if (!res.ok) throw new Error("Failed to fetch photo");
      return api.photos.get.responses[200].parse(await res.json());
    },
    enabled: !!id,
  });
}
