import type { DefineComponent } from 'vue';

export interface FunnelMinusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FunnelMinus: DefineComponent<FunnelMinusProps>;

export default FunnelMinus;
export { FunnelMinus };
