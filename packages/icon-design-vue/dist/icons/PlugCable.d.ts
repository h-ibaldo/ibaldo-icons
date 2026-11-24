import type { DefineComponent } from 'vue';

export interface PlugCableProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PlugCable: DefineComponent<PlugCableProps>;

export default PlugCable;
export { PlugCable };
