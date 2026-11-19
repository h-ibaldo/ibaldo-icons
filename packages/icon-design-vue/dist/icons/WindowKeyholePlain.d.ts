import type { DefineComponent } from 'vue';

export interface WindowKeyholePlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowKeyholePlain: DefineComponent<WindowKeyholePlainProps>;

export default WindowKeyholePlain;
export { WindowKeyholePlain };
