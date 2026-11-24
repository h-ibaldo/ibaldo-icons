import type { DefineComponent } from 'vue';

export interface CloudNetworkRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudNetworkRound: DefineComponent<CloudNetworkRoundProps>;

export default CloudNetworkRound;
export { CloudNetworkRound };
