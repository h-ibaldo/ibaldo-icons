import type { DefineComponent } from 'vue';

export interface BroomSparklesProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BroomSparkles: DefineComponent<BroomSparklesProps>;

export default BroomSparkles;
export { BroomSparkles };
