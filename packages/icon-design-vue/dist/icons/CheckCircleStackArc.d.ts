import type { DefineComponent } from 'vue';

export interface CheckCircleStackArcProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CheckCircleStackArc: DefineComponent<CheckCircleStackArcProps>;

export default CheckCircleStackArc;
export { CheckCircleStackArc };
