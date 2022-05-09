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
    name: [
      {
        required: true,
        message: "This field is required",
      },
    ],
    username: [
      {
        required: true,
        message: "This field is required",
      },
    ],
  };
};
