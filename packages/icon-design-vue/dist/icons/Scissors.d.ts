import type { DefineComponent } from 'vue';

export interface ScissorsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Scissors: DefineComponent<ScissorsProps>;

export default Scissors;
export { Scissors };
