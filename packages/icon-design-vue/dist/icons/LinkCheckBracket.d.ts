import type { DefineComponent } from 'vue';

export interface LinkCheckBracketProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkCheckBracket: DefineComponent<LinkCheckBracketProps>;

export default LinkCheckBracket;
export { LinkCheckBracket };
