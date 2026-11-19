import type { DefineComponent } from 'vue';

export interface WindowPlusCirclePlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowPlusCirclePlain: DefineComponent<WindowPlusCirclePlainProps>;

export default WindowPlusCirclePlain;
export { WindowPlusCirclePlain };
