import type { DefineComponent } from 'vue';

export interface LinkMenuWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkMenuWide: DefineComponent<LinkMenuWideProps>;

export default LinkMenuWide;
export { LinkMenuWide };
