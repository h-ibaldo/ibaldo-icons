import type { DefineComponent } from 'vue';

export interface GearSpokesProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GearSpokes: DefineComponent<GearSpokesProps>;

export default GearSpokes;
export { GearSpokes };
