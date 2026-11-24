import type { DefineComponent } from 'vue';

export interface LinkBracketProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkBracket: DefineComponent<LinkBracketProps>;

export default LinkBracket;
export { LinkBracket };
