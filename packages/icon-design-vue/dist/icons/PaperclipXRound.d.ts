import type { DefineComponent } from 'vue';

export interface PaperclipXRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PaperclipXRound: DefineComponent<PaperclipXRoundProps>;

export default PaperclipXRound;
export { PaperclipXRound };
