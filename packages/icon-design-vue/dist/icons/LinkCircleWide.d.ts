import type { DefineComponent } from 'vue';

export interface LinkCircleWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkCircleWide: DefineComponent<LinkCircleWideProps>;

export default LinkCircleWide;
export { LinkCircleWide };
