import type { DefineComponent } from 'vue';

export interface ScreenDockProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ScreenDock: DefineComponent<ScreenDockProps>;

export default ScreenDock;
export { ScreenDock };
