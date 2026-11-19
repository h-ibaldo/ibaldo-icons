import type { DefineComponent } from 'vue';

export interface LinkPlusSlimProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkPlusSlim: DefineComponent<LinkPlusSlimProps>;

export default LinkPlusSlim;
export { LinkPlusSlim };
