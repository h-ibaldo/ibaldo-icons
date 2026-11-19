import type { DefineComponent } from 'vue';

export interface WarningRaysProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WarningRays: DefineComponent<WarningRaysProps>;

export default WarningRays;
export { WarningRays };
