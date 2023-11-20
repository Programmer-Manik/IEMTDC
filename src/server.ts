/* eslint-disable no-console */
// const mongoose = require('mongoose');
import mongoose from 'mongoose';
import app from './app';
import Config from './app/Config';

async function main() {
  try {
    await mongoose.connect(Config.database_url as string);
    app.listen(Config.port, () => {
      console.log(`Example app listening on port ${Config.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}
main().catch((err) => console.log(err));
