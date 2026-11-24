import type { DefineComponent } from 'vue';

export interface FunnelOvalCoinProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FunnelOvalCoin: DefineComponent<FunnelOvalCoinProps>;

export default FunnelOvalCoin;
export { FunnelOvalCoin };
