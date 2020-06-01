// event, context, callback
export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Welcome' }),
    headers: {
      'Content-Type': 'application/json',
    },
  };
};
