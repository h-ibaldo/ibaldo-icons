import type { DefineComponent } from 'vue';

export interface LinkSplitBracketProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkSplitBracket: DefineComponent<LinkSplitBracketProps>;

export default LinkSplitBracket;
export { LinkSplitBracket };
