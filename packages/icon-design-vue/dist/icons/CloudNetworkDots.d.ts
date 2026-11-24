import type { DefineComponent } from 'vue';

export interface CloudNetworkDotsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudNetworkDots: DefineComponent<CloudNetworkDotsProps>;

export default CloudNetworkDots;
export { CloudNetworkDots };
