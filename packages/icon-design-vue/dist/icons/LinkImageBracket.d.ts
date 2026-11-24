import type { DefineComponent } from 'vue';

export interface LinkImageBracketProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkImageBracket: DefineComponent<LinkImageBracketProps>;

export default LinkImageBracket;
export { LinkImageBracket };
