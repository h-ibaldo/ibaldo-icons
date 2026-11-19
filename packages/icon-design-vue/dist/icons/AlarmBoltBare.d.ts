import type { DefineComponent } from 'vue';

export interface AlarmBoltBareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AlarmBoltBare: DefineComponent<AlarmBoltBareProps>;

export default AlarmBoltBare;
export { AlarmBoltBare };
