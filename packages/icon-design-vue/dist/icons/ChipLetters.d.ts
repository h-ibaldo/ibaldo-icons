import type { DefineComponent } from 'vue';

export interface ChipLettersProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChipLetters: DefineComponent<ChipLettersProps>;

export default ChipLetters;
export { ChipLetters };
