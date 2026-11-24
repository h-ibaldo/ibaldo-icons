import type { DefineComponent } from 'vue';

export interface WindowRocketPlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowRocketPlain: DefineComponent<WindowRocketPlainProps>;

export default WindowRocketPlain;
export { WindowRocketPlain };
