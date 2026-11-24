import type { DefineComponent } from 'vue';

export interface NotApproximateCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const NotApproximateCircle: DefineComponent<NotApproximateCircleProps>;

export default NotApproximateCircle;
export { NotApproximateCircle };
