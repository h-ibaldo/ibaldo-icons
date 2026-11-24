import type { DefineComponent } from 'vue';

export interface LinkRaysSlimProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkRaysSlim: DefineComponent<LinkRaysSlimProps>;

export default LinkRaysSlim;
export { LinkRaysSlim };
