import { jwtDecode } from "jwt-decode";

interface IJWT {
    jobTitle?: string;
    email?: string;
    id?: string
}

export const appJwtDecode = (token: string | null): IJWT | null => {
    if (token) {
        console.log(token);
        
        return jwtDecode(String(token) || "");
    }
    return null;
};