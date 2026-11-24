import type { DefineComponent } from 'vue';

export interface LinkPlusBracketProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkPlusBracket: DefineComponent<LinkPlusBracketProps>;

export default LinkPlusBracket;
export { LinkPlusBracket };
