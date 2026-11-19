import type { DefineComponent } from 'vue';

export interface LinkDotsCompactProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkDotsCompact: DefineComponent<LinkDotsCompactProps>;

export default LinkDotsCompact;
export { LinkDotsCompact };
