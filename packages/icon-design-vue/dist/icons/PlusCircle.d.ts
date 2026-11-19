import type { DefineComponent } from 'vue';

export interface PlusCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PlusCircle: DefineComponent<PlusCircleProps>;

export default PlusCircle;
export { PlusCircle };
