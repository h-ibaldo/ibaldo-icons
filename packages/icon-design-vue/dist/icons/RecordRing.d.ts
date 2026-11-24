import type { DefineComponent } from 'vue';

export interface RecordRingProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const RecordRing: DefineComponent<RecordRingProps>;

export default RecordRing;
export { RecordRing };
