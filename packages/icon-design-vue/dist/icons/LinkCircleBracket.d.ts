import type { DefineComponent } from 'vue';

export interface LinkCircleBracketProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkCircleBracket: DefineComponent<LinkCircleBracketProps>;

export default LinkCircleBracket;
export { LinkCircleBracket };
