import jwtDecode from "jwt-decode";

export const getToken = (email: string) => {
  const token = localStorage.getItem(`access-token-${email}`) || "";
  return token;
};

export const getDecodedToken = (email: string) => {
  const token = getToken(email);
  const decodedToken = jwtDecode(token);
  return decodedToken;
};
