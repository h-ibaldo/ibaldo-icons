import type { DefineComponent } from 'vue';

export interface LinkCheckCircleBarProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkCheckCircleBar: DefineComponent<LinkCheckCircleBarProps>;

export default LinkCheckCircleBar;
export { LinkCheckCircleBar };
