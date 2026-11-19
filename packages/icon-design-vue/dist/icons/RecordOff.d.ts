import type { DefineComponent } from 'vue';

export interface RecordOffProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const RecordOff: DefineComponent<RecordOffProps>;

export default RecordOff;
export { RecordOff };
