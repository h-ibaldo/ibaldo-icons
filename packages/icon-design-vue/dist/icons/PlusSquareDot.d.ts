import type { DefineComponent } from 'vue';

export interface PlusSquareDotProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PlusSquareDot: DefineComponent<PlusSquareDotProps>;

export default PlusSquareDot;
export { PlusSquareDot };
