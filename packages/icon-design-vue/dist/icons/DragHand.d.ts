import type { DefineComponent } from 'vue';

export interface DragHandProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DragHand: DefineComponent<DragHandProps>;

export default DragHand;
export { DragHand };
