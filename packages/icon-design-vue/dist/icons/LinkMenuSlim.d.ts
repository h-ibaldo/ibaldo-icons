import type { DefineComponent } from 'vue';

export interface LinkMenuSlimProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkMenuSlim: DefineComponent<LinkMenuSlimProps>;

export default LinkMenuSlim;
export { LinkMenuSlim };
