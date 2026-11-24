import type { DefineComponent } from 'vue';

export interface HighlighterBareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HighlighterBare: DefineComponent<HighlighterBareProps>;

export default HighlighterBare;
export { HighlighterBare };
