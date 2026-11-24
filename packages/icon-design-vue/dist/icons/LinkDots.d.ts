import type { DefineComponent } from 'vue';

export interface LinkDotsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkDots: DefineComponent<LinkDotsProps>;

export default LinkDots;
export { LinkDots };
