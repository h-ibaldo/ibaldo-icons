import type { DefineComponent } from 'vue';

export interface WandSparklesProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WandSparkles: DefineComponent<WandSparklesProps>;

export default WandSparkles;
export { WandSparkles };
