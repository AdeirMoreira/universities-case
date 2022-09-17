import { config } from 'dotenv';
import mongoose from 'mongoose';

config();

const UniversitySchema = new mongoose.Schema({
  domains: [String],
  alpha_two_code: {
    type: String,
    require: true,
  },
  country: {
    type: String,
    require: true,
  },
  web_pages: [String],
  name: {
    type: String,
    require: true,
  },
  'state-province': {
    type: String,
    require: false,
  },
});

export const universityModel = mongoose.model('Universitie', UniversitySchema);

export const countrys = [
  'Argentina',
  'Brazil',
  'Chile',
  'Colombia',
  'Paraguay',
  'Peru',
  'Suriname',
  'Uruguay',
];

main().catch((err) => console.log(err));

async function remove() {
  const promisesArray = countrys.map((country: string) => {
    return universityModel.deleteMany({ country });
  });

  return Promise.all(promisesArray);
}

async function main() {
  await mongoose.connect(process.env.MONGO_URI);
  const result = await remove();
  console.log(result);
}
