import type { DefineComponent } from 'vue';

export interface WindowTextXCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowTextXCircle: DefineComponent<WindowTextXCircleProps>;

export default WindowTextXCircle;
export { WindowTextXCircle };
