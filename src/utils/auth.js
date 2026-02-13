const USERS_KEY = "ft_users";
const CURRENT_KEY = "ft_current_user";

export function getUsers() {
  return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
}

export function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export function registerUser({ name, email, password }) {
  const users = getUsers();

  const exists = users.find((u) => u.email === email);
  if (exists) {
    return { ok: false, message: "Email already registered!" };
  }

  const newUser = {
    id: Date.now(),
    name,
    email,
    password,
    profile: {
      age: "",
      height: "",
      weight: "",
      goal: "Weight Loss",
    },
  };

  users.push(newUser);
  saveUsers(users);

  return { ok: true, message: "Registration successful!" };
}

export function loginUser({ email, password }) {
  const users = getUsers();

  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) {
    return { ok: false, message: "Invalid email or password!" };
  }

  localStorage.setItem(CURRENT_KEY, JSON.stringify(user));
  return { ok: true, message: "Login successful!" };
}

export function getCurrentUser() {
  return JSON.parse(localStorage.getItem(CURRENT_KEY));
}

export function isLoggedIn() {
  return !!getCurrentUser();
}

export function logoutUser() {
  localStorage.removeItem(CURRENT_KEY);
}

export function updateCurrentUser(updatedUser) {
  const users = getUsers();
  const newUsers = users.map((u) =>
    u.id === updatedUser.id ? updatedUser : u
  );

  saveUsers(newUsers);
  localStorage.setItem(CURRENT_KEY, JSON.stringify(updatedUser));
}
