import type { DefineComponent } from 'vue';

export interface WindowTrafficLightPlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowTrafficLightPlain: DefineComponent<WindowTrafficLightPlainProps>;

export default WindowTrafficLightPlain;
export { WindowTrafficLightPlain };
