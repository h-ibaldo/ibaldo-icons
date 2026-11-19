import type { DefineComponent } from 'vue';

export interface CloudNetworkNodeRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudNetworkNodeRound: DefineComponent<CloudNetworkNodeRoundProps>;

export default CloudNetworkNodeRound;
export { CloudNetworkNodeRound };
