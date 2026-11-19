import type { DefineComponent } from 'vue';

export interface PaperclipRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PaperclipRound: DefineComponent<PaperclipRoundProps>;

export default PaperclipRound;
export { PaperclipRound };
