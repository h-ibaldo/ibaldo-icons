import type { DefineComponent } from 'vue';

export interface VolumeLowProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const VolumeLow: DefineComponent<VolumeLowProps>;

export default VolumeLow;
export { VolumeLow };
