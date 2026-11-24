import type { DefineComponent } from 'vue';

export interface LinkPlusNotchedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkPlusNotched: DefineComponent<LinkPlusNotchedProps>;

export default LinkPlusNotched;
export { LinkPlusNotched };
