import type { DefineComponent } from 'vue';

export interface ApproximateProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Approximate: DefineComponent<ApproximateProps>;

export default Approximate;
export { Approximate };
