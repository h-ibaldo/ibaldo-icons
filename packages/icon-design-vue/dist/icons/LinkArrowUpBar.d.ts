import type { DefineComponent } from 'vue';

export interface LinkArrowUpBarProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkArrowUpBar: DefineComponent<LinkArrowUpBarProps>;

export default LinkArrowUpBar;
export { LinkArrowUpBar };
