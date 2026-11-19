import type { DefineComponent } from 'vue';

export interface PointerXCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PointerXCircle: DefineComponent<PointerXCircleProps>;

export default PointerXCircle;
export { PointerXCircle };
