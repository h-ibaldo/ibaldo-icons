import type { DefineComponent } from 'vue';

export interface ScanLettersProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ScanLetters: DefineComponent<ScanLettersProps>;

export default ScanLetters;
export { ScanLetters };
