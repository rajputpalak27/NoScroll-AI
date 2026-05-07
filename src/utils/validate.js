export const validateFields = (email, password) => {
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(password);

  if (!validEmail) return "Enter valid email";
  if (!validPassword) return "Enter valid Password";

  return null;
};
