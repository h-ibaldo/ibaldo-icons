import type { DefineComponent } from 'vue';

export interface PaperclipPlusRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PaperclipPlusRound: DefineComponent<PaperclipPlusRoundProps>;

export default PaperclipPlusRound;
export { PaperclipPlusRound };
