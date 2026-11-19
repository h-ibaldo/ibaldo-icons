import type { DefineComponent } from 'vue';

export interface LinkProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Link: DefineComponent<LinkProps>;

export default Link;
export { Link };
