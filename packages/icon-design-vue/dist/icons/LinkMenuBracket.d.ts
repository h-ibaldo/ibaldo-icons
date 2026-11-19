import type { DefineComponent } from 'vue';

export interface LinkMenuBracketProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkMenuBracket: DefineComponent<LinkMenuBracketProps>;

export default LinkMenuBracket;
export { LinkMenuBracket };
