import type { DefineComponent } from 'vue';

export interface ChipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Chip: DefineComponent<ChipProps>;

export default Chip;
export { Chip };
