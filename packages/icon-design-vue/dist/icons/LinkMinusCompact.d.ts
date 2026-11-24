import type { DefineComponent } from 'vue';

export interface LinkMinusCompactProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkMinusCompact: DefineComponent<LinkMinusCompactProps>;

export default LinkMinusCompact;
export { LinkMinusCompact };
