import type { DefineComponent } from 'vue';

export interface SquareDashedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SquareDashed: DefineComponent<SquareDashedProps>;

export default SquareDashed;
export { SquareDashed };
