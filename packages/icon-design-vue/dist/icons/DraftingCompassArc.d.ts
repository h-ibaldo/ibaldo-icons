import type { DefineComponent } from 'vue';

export interface DraftingCompassArcProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DraftingCompassArc: DefineComponent<DraftingCompassArcProps>;

export default DraftingCompassArc;
export { DraftingCompassArc };
