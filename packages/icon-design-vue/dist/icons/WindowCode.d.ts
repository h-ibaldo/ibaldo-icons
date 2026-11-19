import type { DefineComponent } from 'vue';

export interface WindowCodeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowCode: DefineComponent<WindowCodeProps>;

export default WindowCode;
export { WindowCode };
