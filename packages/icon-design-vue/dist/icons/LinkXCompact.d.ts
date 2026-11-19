import type { DefineComponent } from 'vue';

export interface LinkXCompactProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkXCompact: DefineComponent<LinkXCompactProps>;

export default LinkXCompact;
export { LinkXCompact };
