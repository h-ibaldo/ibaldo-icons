import type { DefineComponent } from 'vue';

export interface LinkMinusWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkMinusWide: DefineComponent<LinkMinusWideProps>;

export default LinkMinusWide;
export { LinkMinusWide };
