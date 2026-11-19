import type { DefineComponent } from 'vue';

export interface LinkPlusBarProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkPlusBar: DefineComponent<LinkPlusBarProps>;

export default LinkPlusBar;
export { LinkPlusBar };
