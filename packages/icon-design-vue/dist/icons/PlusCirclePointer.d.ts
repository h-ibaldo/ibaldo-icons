import type { DefineComponent } from 'vue';

export interface PlusCirclePointerProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PlusCirclePointer: DefineComponent<PlusCirclePointerProps>;

export default PlusCirclePointer;
export { PlusCirclePointer };
