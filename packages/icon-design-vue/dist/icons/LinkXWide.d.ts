import type { DefineComponent } from 'vue';

export interface LinkXWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkXWide: DefineComponent<LinkXWideProps>;

export default LinkXWide;
export { LinkXWide };
