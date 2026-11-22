import type { DefineComponent } from 'vue';

export interface FunnelXProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FunnelX: DefineComponent<FunnelXProps>;

export default FunnelX;
export { FunnelX };
