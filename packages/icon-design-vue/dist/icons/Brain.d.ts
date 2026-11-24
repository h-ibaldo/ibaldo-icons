import type { DefineComponent } from 'vue';

export interface BrainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Brain: DefineComponent<BrainProps>;

export default Brain;
export { Brain };
