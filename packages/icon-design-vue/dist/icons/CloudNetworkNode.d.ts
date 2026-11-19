import type { DefineComponent } from 'vue';

export interface CloudNetworkNodeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudNetworkNode: DefineComponent<CloudNetworkNodeProps>;

export default CloudNetworkNode;
export { CloudNetworkNode };
