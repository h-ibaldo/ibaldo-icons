import type { DefineComponent } from 'vue';

export interface EyeSquareDotProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const EyeSquareDot: DefineComponent<EyeSquareDotProps>;

export default EyeSquareDot;
export { EyeSquareDot };
