import type { DefineComponent } from 'vue';

export interface AlarmPieBareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AlarmPieBare: DefineComponent<AlarmPieBareProps>;

export default AlarmPieBare;
export { AlarmPieBare };
