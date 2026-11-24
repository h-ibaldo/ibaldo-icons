import type { DefineComponent } from 'vue';

export interface FunnelPlusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FunnelPlus: DefineComponent<FunnelPlusProps>;

export default FunnelPlus;
export { FunnelPlus };
