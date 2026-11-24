import type { DefineComponent } from 'vue';

export interface WindowRosetteBareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowRosetteBare: DefineComponent<WindowRosetteBareProps>;

export default WindowRosetteBare;
export { WindowRosetteBare };
