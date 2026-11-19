import type { DefineComponent } from 'vue';

export interface WindowBoltBareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowBoltBare: DefineComponent<WindowBoltBareProps>;

export default WindowBoltBare;
export { WindowBoltBare };
