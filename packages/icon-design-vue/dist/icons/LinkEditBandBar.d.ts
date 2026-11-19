import type { DefineComponent } from 'vue';

export interface LinkEditBandBarProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkEditBandBar: DefineComponent<LinkEditBandBarProps>;

export default LinkEditBandBar;
export { LinkEditBandBar };
