import type { DefineComponent } from 'vue';

export interface PencilSparklesProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PencilSparkles: DefineComponent<PencilSparklesProps>;

export default PencilSparkles;
export { PencilSparkles };
