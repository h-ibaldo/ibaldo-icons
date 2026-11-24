import type { DefineComponent } from 'vue';

export interface LinkBrokenProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkBroken: DefineComponent<LinkBrokenProps>;

export default LinkBroken;
export { LinkBroken };
