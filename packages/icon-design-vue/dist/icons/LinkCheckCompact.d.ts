import type { DefineComponent } from 'vue';

export interface LinkCheckCompactProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkCheckCompact: DefineComponent<LinkCheckCompactProps>;

export default LinkCheckCompact;
export { LinkCheckCompact };
