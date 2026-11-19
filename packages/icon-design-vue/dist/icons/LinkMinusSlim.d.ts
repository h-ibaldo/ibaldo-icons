import type { DefineComponent } from 'vue';

export interface LinkMinusSlimProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkMinusSlim: DefineComponent<LinkMinusSlimProps>;

export default LinkMinusSlim;
export { LinkMinusSlim };
