import type { DefineComponent } from 'vue';

export interface PlugProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Plug: DefineComponent<PlugProps>;

export default Plug;
export { Plug };
