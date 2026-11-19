import type { DefineComponent } from 'vue';

export interface RecordOffSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const RecordOffSquare: DefineComponent<RecordOffSquareProps>;

export default RecordOffSquare;
export { RecordOffSquare };
