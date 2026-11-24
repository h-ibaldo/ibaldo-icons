import type { DefineComponent } from 'vue';

export interface LinkXSlimProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkXSlim: DefineComponent<LinkXSlimProps>;

export default LinkXSlim;
export { LinkXSlim };
