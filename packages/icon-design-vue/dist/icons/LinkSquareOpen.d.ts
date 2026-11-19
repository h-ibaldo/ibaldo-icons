import type { DefineComponent } from 'vue';

export interface LinkSquareOpenProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkSquareOpen: DefineComponent<LinkSquareOpenProps>;

export default LinkSquareOpen;
export { LinkSquareOpen };
