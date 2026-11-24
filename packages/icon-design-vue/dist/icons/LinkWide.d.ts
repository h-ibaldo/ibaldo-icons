import type { DefineComponent } from 'vue';

export interface LinkWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkWide: DefineComponent<LinkWideProps>;

export default LinkWide;
export { LinkWide };
