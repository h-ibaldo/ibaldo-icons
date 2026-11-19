import type { DefineComponent } from 'vue';

export interface BookOpenWaveProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookOpenWave: DefineComponent<BookOpenWaveProps>;

export default BookOpenWave;
export { BookOpenWave };
