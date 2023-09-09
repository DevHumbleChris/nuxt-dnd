interface User {
  userID: string | null;
}

export const getUserID = async (): Promise<User> => {
  const data = user();

  // Extracting GitHub UserID from Image.
  if (data?.image) {
    const firstSplit = data?.image?.split("/u");
    const secondSplit = firstSplit[firstSplit?.length - 1].split("?");
    const secSplit = secondSplit[0].split("/");
    const userID = secSplit[secSplit.length - 1];

    return {
      userID,
    };
  }

  return {
    userID: null,
  };
};
