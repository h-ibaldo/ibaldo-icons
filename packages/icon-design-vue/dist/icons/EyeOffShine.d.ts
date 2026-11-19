import type { DefineComponent } from 'vue';

export interface EyeOffShineProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const EyeOffShine: DefineComponent<EyeOffShineProps>;

export default EyeOffShine;
export { EyeOffShine };
