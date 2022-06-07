import { decode } from 'he';

export const decodeTxt = (v: string) => decode(v); 