import a from 'axios';

// TODO: Set this to true when building
// const PRODUCTION = false;

export const BASE_URL = 'http://192.168.29.63:8000';

export const api = a.create({
  baseURL: BASE_URL,
});

export interface ISubject {
  uid: string;
  batch: string;
  name: string;
}

export interface IChapter {
  uid: string;
  subject: string;
  name: string;
  lectures: number;
  dpps: number;
  notes: number;
}

export interface IBatch {
  description: string;
  end_date: string;
  is_active: true;
  name: string;
  start_date: string;
  subjects: ISubject[];
  uid: string;
}
export interface ILecture {
  chapter: string;
  created_at: string;
  duration: number;
  file: string | null;
  status: string;
  title: string;
  type: 'youtube' | 'native';
  uid: string;
  updated_at: string;
  video_id: string | null;
}
export interface INotes {
  batch: string;
  chapter: string;
  created_at: string;
  file: string;
  lecture: string | null;
  name: string;
  uid: string;
  updated_at: string;
}
