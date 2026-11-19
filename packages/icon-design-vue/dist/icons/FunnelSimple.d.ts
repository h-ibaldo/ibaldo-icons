import type { DefineComponent } from 'vue';

export interface FunnelSimpleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FunnelSimple: DefineComponent<FunnelSimpleProps>;

export default FunnelSimple;
export { FunnelSimple };
