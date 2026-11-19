import type { DefineComponent } from 'vue';

export interface EyeLargeShineProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const EyeLargeShine: DefineComponent<EyeLargeShineProps>;

export default EyeLargeShine;
export { EyeLargeShine };
