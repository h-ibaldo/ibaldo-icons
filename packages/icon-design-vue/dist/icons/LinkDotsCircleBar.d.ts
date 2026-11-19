import type { DefineComponent } from 'vue';

export interface LinkDotsCircleBarProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkDotsCircleBar: DefineComponent<LinkDotsCircleBarProps>;

export default LinkDotsCircleBar;
export { LinkDotsCircleBar };
