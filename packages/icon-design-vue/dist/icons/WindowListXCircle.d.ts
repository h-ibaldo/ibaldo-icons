import type { DefineComponent } from 'vue';

export interface WindowListXCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowListXCircle: DefineComponent<WindowListXCircleProps>;

export default WindowListXCircle;
export { WindowListXCircle };
