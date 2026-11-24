import type { DefineComponent } from 'vue';

export interface PointerCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PointerCircle: DefineComponent<PointerCircleProps>;

export default PointerCircle;
export { PointerCircle };
