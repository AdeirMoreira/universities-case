import { Document } from 'mongoose';

export interface University extends Document {
  domains: string[];
  web_pages: string[];
  alpha_two_code: string;
  name: string;
  country: string;
  'state-province'?: string;
}
