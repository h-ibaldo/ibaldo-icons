import type { DefineComponent } from 'vue';

export interface CloudNetworkTallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudNetworkTall: DefineComponent<CloudNetworkTallProps>;

export default CloudNetworkTall;
export { CloudNetworkTall };
