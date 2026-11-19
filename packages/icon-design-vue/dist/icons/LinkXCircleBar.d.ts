import type { DefineComponent } from 'vue';

export interface LinkXCircleBarProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkXCircleBar: DefineComponent<LinkXCircleBarProps>;

export default LinkXCircleBar;
export { LinkXCircleBar };
