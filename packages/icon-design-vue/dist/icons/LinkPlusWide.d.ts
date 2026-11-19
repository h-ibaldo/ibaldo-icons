import type { DefineComponent } from 'vue';

export interface LinkPlusWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkPlusWide: DefineComponent<LinkPlusWideProps>;

export default LinkPlusWide;
export { LinkPlusWide };
