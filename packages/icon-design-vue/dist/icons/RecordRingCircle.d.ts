import type { DefineComponent } from 'vue';

export interface RecordRingCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const RecordRingCircle: DefineComponent<RecordRingCircleProps>;

export default RecordRingCircle;
export { RecordRingCircle };
