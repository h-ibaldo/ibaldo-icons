import type { DefineComponent } from 'vue';

export interface LinkSquareShortProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkSquareShort: DefineComponent<LinkSquareShortProps>;

export default LinkSquareShort;
export { LinkSquareShort };
