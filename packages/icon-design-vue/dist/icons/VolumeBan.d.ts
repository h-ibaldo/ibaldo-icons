import type { DefineComponent } from 'vue';

export interface VolumeBanProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const VolumeBan: DefineComponent<VolumeBanProps>;

export default VolumeBan;
export { VolumeBan };
