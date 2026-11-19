import type { DefineComponent } from 'vue';

export interface LinkSquareWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkSquareWide: DefineComponent<LinkSquareWideProps>;

export default LinkSquareWide;
export { LinkSquareWide };
