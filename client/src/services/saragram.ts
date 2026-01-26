/**
 * @file Saragram Services
 * @description Simulates backend services for authentication and file handling.
 */

// --- Authentication Service (JWT) ---

interface User {
  id: number;
  username: string;
}

const SECRET_KEY = import.meta.env.VITE_JWT_SECRET || 'default-secret-key';

/**
 * Simulates creating a JSON Web Token.
 * In a real backend, you would use a library like 'jsonwebtoken'.
 * @param user The user object to encode in the token.
 * @returns A simulated JWT string.
 */
export const generateToken = (user: User): string => {
  console.log(`Generating token for user: ${user.username} with secret: ${SECRET_KEY}`);
  // In a real implementation:
  // return jwt.sign({ id: user.id, username: user.username }, SECRET_KEY, { expiresIn: '1h' });
  const header = btoa(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));
  const payload = btoa(JSON.stringify({ id: user.id, username: user.username, exp: Date.now() + 3600000 }));
  const signature = `simulated-signature-for-${user.id}`; // Simulated signature
  return `${header}.${payload}.${signature}`;
};

/**
 * Simulates verifying a JSON Web Token.
 * @param token The token to verify.
 * @returns The decoded user payload if the token is valid, otherwise null.
 */
export const verifyToken = (token: string): User | null => {
    try {
        const [header, payload, signature] = token.split('.');
        if (!header || !payload || !signature) return null;

        const decodedPayload = JSON.parse(atob(payload));

        // In a real implementation, you'd verify the signature against the secret key
        console.log(`Verifying token with signature: ${signature}`);

        if (decodedPayload.exp < Date.now()) {
            console.error("Token expired");
            return null;
        }

        return decodedPayload as User;
    } catch (error) {
        console.error("Token verification failed:", error);
        return null;
    }
}


// --- File Handling Service (Multer) ---

/**
 * Simulates a Multer file filter to allow only specific image extensions.
 * In a real Express backend, this would be a middleware function.
 * @param file A simulated file object.
 * @param callback A simulated callback function.
 */
export const imageFileFilter = (
    file: { mimetype: string; originalname: string },
    callback: (error: Error | null, acceptFile: boolean) => void
) => {
    const allowedMimes = ['image/jpeg', 'image/png', 'image/gif'];

    if (allowedMimes.includes(file.mimetype)) {
        console.log(`File accepted: ${file.originalname}`);
        callback(null, true);
    } else {
        console.error(`File rejected: ${file.originalname}. Invalid mime type: ${file.mimetype}`);
        callback(new Error('Invalid file type. Only JPEG, PNG, and GIF are allowed.'), false);
    }
};

// Example usage:
// const simulatedFile = { mimetype: 'image/jpeg', originalname: 'photo.jpg' };
// imageFileFilter(simulatedFile, (err, accepted) => {
//   if (err) console.log(err.message);
//   else console.log(`File acceptance status: ${accepted}`);
// });
