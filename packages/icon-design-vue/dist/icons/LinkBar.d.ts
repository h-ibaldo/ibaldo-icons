import type { DefineComponent } from 'vue';

export interface LinkBarProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkBar: DefineComponent<LinkBarProps>;

export default LinkBar;
export { LinkBar };
