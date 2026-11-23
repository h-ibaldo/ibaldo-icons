import type { DefineComponent } from 'vue';

export interface HighlighterProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Highlighter: DefineComponent<HighlighterProps>;

export default Highlighter;
export { Highlighter };
