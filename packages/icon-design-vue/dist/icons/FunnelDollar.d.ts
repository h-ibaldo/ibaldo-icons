import type { DefineComponent } from 'vue';

export interface FunnelDollarProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FunnelDollar: DefineComponent<FunnelDollarProps>;

export default FunnelDollar;
export { FunnelDollar };
