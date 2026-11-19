import type { DefineComponent } from 'vue';

export interface EyeShineProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const EyeShine: DefineComponent<EyeShineProps>;

export default EyeShine;
export { EyeShine };
