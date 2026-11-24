import type { DefineComponent } from 'vue';

export interface HeartDottedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HeartDotted: DefineComponent<HeartDottedProps>;

export default HeartDotted;
export { HeartDotted };
