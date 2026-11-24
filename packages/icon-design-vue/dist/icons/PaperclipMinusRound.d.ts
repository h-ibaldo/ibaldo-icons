import type { DefineComponent } from 'vue';

export interface PaperclipMinusRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PaperclipMinusRound: DefineComponent<PaperclipMinusRoundProps>;

export default PaperclipMinusRound;
export { PaperclipMinusRound };
