import type { DefineComponent } from 'vue';

export interface LinkCompactProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkCompact: DefineComponent<LinkCompactProps>;

export default LinkCompact;
export { LinkCompact };
