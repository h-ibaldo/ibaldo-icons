import type { DefineComponent } from 'vue';

export interface PointerPlusCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PointerPlusCircle: DefineComponent<PointerPlusCircleProps>;

export default PointerPlusCircle;
export { PointerPlusCircle };
