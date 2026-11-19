import type { DefineComponent } from 'vue';

export interface PointerShineProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PointerShine: DefineComponent<PointerShineProps>;

export default PointerShine;
export { PointerShine };
