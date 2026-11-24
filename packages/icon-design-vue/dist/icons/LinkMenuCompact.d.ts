import type { DefineComponent } from 'vue';

export interface LinkMenuCompactProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkMenuCompact: DefineComponent<LinkMenuCompactProps>;

export default LinkMenuCompact;
export { LinkMenuCompact };
