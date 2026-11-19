import type { DefineComponent } from 'vue';

export interface LinkCheckSlimProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkCheckSlim: DefineComponent<LinkCheckSlimProps>;

export default LinkCheckSlim;
export { LinkCheckSlim };
