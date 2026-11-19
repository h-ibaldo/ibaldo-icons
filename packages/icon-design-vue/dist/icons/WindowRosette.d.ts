import type { DefineComponent } from 'vue';

export interface WindowRosetteProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowRosette: DefineComponent<WindowRosetteProps>;

export default WindowRosette;
export { WindowRosette };
