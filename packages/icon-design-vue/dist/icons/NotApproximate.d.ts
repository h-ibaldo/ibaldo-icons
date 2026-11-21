import type { DefineComponent } from 'vue';

export interface NotApproximateProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const NotApproximate: DefineComponent<NotApproximateProps>;

export default NotApproximate;
export { NotApproximate };
