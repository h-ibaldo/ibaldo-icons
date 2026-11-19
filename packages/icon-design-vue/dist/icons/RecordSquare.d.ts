import type { DefineComponent } from 'vue';

export interface RecordSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const RecordSquare: DefineComponent<RecordSquareProps>;

export default RecordSquare;
export { RecordSquare };
