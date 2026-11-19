import type { DefineComponent } from 'vue';

export interface AlarmBareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AlarmBare: DefineComponent<AlarmBareProps>;

export default AlarmBare;
export { AlarmBare };
