import { ObjectId } from 'mongodb';

export type ItemType = {
  _id: ObjectId;
  title: string;
  date: string;
  contens: string;
  author: string;
};
