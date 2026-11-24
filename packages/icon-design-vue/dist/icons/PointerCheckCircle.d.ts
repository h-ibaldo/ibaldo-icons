import type { DefineComponent } from 'vue';

export interface PointerCheckCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PointerCheckCircle: DefineComponent<PointerCheckCircleProps>;

export default PointerCheckCircle;
export { PointerCheckCircle };
