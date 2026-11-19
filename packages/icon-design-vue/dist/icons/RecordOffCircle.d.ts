import type { DefineComponent } from 'vue';

export interface RecordOffCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const RecordOffCircle: DefineComponent<RecordOffCircleProps>;

export default RecordOffCircle;
export { RecordOffCircle };
