import express from 'express';

export const start = async (): Promise<void> => {
  try {
    const app = express();
    const PORT = 8000;

    app.get('/', (_, res) => res.send('Blog Server Up!'));

    app.listen(PORT, () => {
      console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
    });
  } catch (err) {
    console.error(`Error starting server: ${err.message}`);
    throw err;
  }
};
