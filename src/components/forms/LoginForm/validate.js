export default function validate(values) {
  const { email, password } = values;

  return {
    email: !email && 'Email cant be empty',
    password: !password && 'Password cant be empty',
  };
}
