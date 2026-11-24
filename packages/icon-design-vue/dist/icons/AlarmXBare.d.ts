import type { DefineComponent } from 'vue';

export interface AlarmXBareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AlarmXBare: DefineComponent<AlarmXBareProps>;

export default AlarmXBare;
export { AlarmXBare };
