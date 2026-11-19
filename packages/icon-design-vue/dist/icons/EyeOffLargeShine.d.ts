import type { DefineComponent } from 'vue';

export interface EyeOffLargeShineProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const EyeOffLargeShine: DefineComponent<EyeOffLargeShineProps>;

export default EyeOffLargeShine;
export { EyeOffLargeShine };
