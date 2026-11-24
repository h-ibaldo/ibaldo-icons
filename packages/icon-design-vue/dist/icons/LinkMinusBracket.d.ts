import type { DefineComponent } from 'vue';

export interface LinkMinusBracketProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkMinusBracket: DefineComponent<LinkMinusBracketProps>;

export default LinkMinusBracket;
export { LinkMinusBracket };
