export const validateModel = () => {
  return {
    email: [
      {
        required: true,
        message: "This field is required",
      },
    ],
    password: [
      {
        required: true,
        message: "This field is required",
      },
    ],
  };
};
