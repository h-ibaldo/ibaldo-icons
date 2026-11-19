import type { DefineComponent } from 'vue';

export interface LinkDotsWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkDotsWide: DefineComponent<LinkDotsWideProps>;

export default LinkDotsWide;
export { LinkDotsWide };
