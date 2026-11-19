import type { DefineComponent } from 'vue';

export interface LinkDotsSlimProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkDotsSlim: DefineComponent<LinkDotsSlimProps>;

export default LinkDotsSlim;
export { LinkDotsSlim };
