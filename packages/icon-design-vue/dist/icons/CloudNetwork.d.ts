import type { DefineComponent } from 'vue';

export interface CloudNetworkProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudNetwork: DefineComponent<CloudNetworkProps>;

export default CloudNetwork;
export { CloudNetwork };
