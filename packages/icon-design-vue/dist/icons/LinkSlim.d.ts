import type { DefineComponent } from 'vue';

export interface LinkSlimProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkSlim: DefineComponent<LinkSlimProps>;

export default LinkSlim;
export { LinkSlim };
