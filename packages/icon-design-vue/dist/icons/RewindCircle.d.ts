import type { DefineComponent } from 'vue';

export interface RewindCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const RewindCircle: DefineComponent<RewindCircleProps>;

export default RewindCircle;
export { RewindCircle };
