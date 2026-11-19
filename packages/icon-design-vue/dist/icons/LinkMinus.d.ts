import type { DefineComponent } from 'vue';

export interface LinkMinusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkMinus: DefineComponent<LinkMinusProps>;

export default LinkMinus;
export { LinkMinus };
