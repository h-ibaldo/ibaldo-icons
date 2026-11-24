import type { DefineComponent } from 'vue';

export interface FunnelCoinProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FunnelCoin: DefineComponent<FunnelCoinProps>;

export default FunnelCoin;
export { FunnelCoin };
