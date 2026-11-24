import type { DefineComponent } from 'vue';

export interface WindowBoltProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowBolt: DefineComponent<WindowBoltProps>;

export default WindowBolt;
export { WindowBolt };
