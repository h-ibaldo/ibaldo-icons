import type { DefineComponent } from 'vue';

export interface VolumeMediumProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const VolumeMedium: DefineComponent<VolumeMediumProps>;

export default VolumeMedium;
export { VolumeMedium };
