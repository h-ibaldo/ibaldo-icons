import type { DefineComponent } from 'vue';

export interface LinkMenuProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkMenu: DefineComponent<LinkMenuProps>;

export default LinkMenu;
export { LinkMenu };
