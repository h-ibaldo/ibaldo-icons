import type { DefineComponent } from 'vue';

export interface WindowXCirclePlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowXCirclePlain: DefineComponent<WindowXCirclePlainProps>;

export default WindowXCirclePlain;
export { WindowXCirclePlain };
