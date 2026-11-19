import type { DefineComponent } from 'vue';

export interface LinkCheckWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkCheckWide: DefineComponent<LinkCheckWideProps>;

export default LinkCheckWide;
export { LinkCheckWide };
