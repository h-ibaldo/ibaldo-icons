import type { DefineComponent } from 'vue';

export interface AlarmXProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AlarmX: DefineComponent<AlarmXProps>;

export default AlarmX;
export { AlarmX };
