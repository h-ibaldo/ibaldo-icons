import type { DefineComponent } from 'vue';

export interface AlarmBanBareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AlarmBanBare: DefineComponent<AlarmBanBareProps>;

export default AlarmBanBare;
export { AlarmBanBare };
