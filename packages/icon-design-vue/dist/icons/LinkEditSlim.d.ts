import type { DefineComponent } from 'vue';

export interface LinkEditSlimProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkEditSlim: DefineComponent<LinkEditSlimProps>;

export default LinkEditSlim;
export { LinkEditSlim };
