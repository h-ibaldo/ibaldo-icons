import type { DefineComponent } from 'vue';

export interface RecordRingSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const RecordRingSquare: DefineComponent<RecordRingSquareProps>;

export default RecordRingSquare;
export { RecordRingSquare };
