export const getUserRoleName = (role) =>
  role === "GN"
    ? "Grama Niladhari"
    : role === "GSN"
    ? "Gowijana Sewa Niladhari"
    : role === "ADMIN"
    ? "Admin"
    : "User";
