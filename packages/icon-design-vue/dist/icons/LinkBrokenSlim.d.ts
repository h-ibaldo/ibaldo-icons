import type { DefineComponent } from 'vue';

export interface LinkBrokenSlimProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkBrokenSlim: DefineComponent<LinkBrokenSlimProps>;

export default LinkBrokenSlim;
export { LinkBrokenSlim };
