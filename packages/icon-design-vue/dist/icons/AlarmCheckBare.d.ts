import type { DefineComponent } from 'vue';

export interface AlarmCheckBareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AlarmCheckBare: DefineComponent<AlarmCheckBareProps>;

export default AlarmCheckBare;
export { AlarmCheckBare };
