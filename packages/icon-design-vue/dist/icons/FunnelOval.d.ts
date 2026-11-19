import type { DefineComponent } from 'vue';

export interface FunnelOvalProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FunnelOval: DefineComponent<FunnelOvalProps>;

export default FunnelOval;
export { FunnelOval };
