import type { DefineComponent } from 'vue';

export interface PlusCircleStackArcProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PlusCircleStackArc: DefineComponent<PlusCircleStackArcProps>;

export default PlusCircleStackArc;
export { PlusCircleStackArc };
