import type { DefineComponent } from 'vue';

export interface LinkXBracketProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkXBracket: DefineComponent<LinkXBracketProps>;

export default LinkXBracket;
export { LinkXBracket };
