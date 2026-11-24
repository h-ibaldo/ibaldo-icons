import type { DefineComponent } from 'vue';

export interface LinkPlusCompactProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkPlusCompact: DefineComponent<LinkPlusCompactProps>;

export default LinkPlusCompact;
export { LinkPlusCompact };
