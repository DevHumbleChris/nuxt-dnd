interface User {
  name: string;
  email: string;
  image: string;
}

export const user = (): User | null => {
  const { data } = useAuth();

  if (!data?.value) {
    return null
  }

  return data?.value?.user as User;
};
