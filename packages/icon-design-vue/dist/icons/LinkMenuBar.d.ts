import type { DefineComponent } from 'vue';

export interface LinkMenuBarProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkMenuBar: DefineComponent<LinkMenuBarProps>;

export default LinkMenuBar;
export { LinkMenuBar };
