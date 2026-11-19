import type { DefineComponent } from 'vue';

export interface LinkDotsBracketProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkDotsBracket: DefineComponent<LinkDotsBracketProps>;

export default LinkDotsBracket;
export { LinkDotsBracket };
