import type { DefineComponent } from 'vue';

export interface NotEqualCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const NotEqualCircle: DefineComponent<NotEqualCircleProps>;

export default NotEqualCircle;
export { NotEqualCircle };
