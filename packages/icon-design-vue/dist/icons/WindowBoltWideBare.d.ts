import type { DefineComponent } from 'vue';

export interface WindowBoltWideBareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowBoltWideBare: DefineComponent<WindowBoltWideBareProps>;

export default WindowBoltWideBare;
export { WindowBoltWideBare };
