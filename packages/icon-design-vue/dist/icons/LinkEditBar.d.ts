import type { DefineComponent } from 'vue';

export interface LinkEditBarProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkEditBar: DefineComponent<LinkEditBarProps>;

export default LinkEditBar;
export { LinkEditBar };
