import type { DefineComponent } from 'vue';

export interface PaperclipCheckRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PaperclipCheckRound: DefineComponent<PaperclipCheckRoundProps>;

export default PaperclipCheckRound;
export { PaperclipCheckRound };
