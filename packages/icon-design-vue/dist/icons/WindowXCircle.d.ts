import type { DefineComponent } from 'vue';

export interface WindowXCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowXCircle: DefineComponent<WindowXCircleProps>;

export default WindowXCircle;
export { WindowXCircle };
