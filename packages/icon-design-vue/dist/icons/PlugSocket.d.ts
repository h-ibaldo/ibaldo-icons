import type { DefineComponent } from 'vue';

export interface PlugSocketProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PlugSocket: DefineComponent<PlugSocketProps>;

export default PlugSocket;
export { PlugSocket };
