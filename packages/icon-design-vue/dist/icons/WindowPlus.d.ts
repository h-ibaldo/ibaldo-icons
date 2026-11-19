import type { DefineComponent } from 'vue';

export interface WindowPlusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowPlus: DefineComponent<WindowPlusProps>;

export default WindowPlus;
export { WindowPlus };
