import type { DefineComponent } from 'vue';

export interface LinkPlusCircleNotchedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkPlusCircleNotched: DefineComponent<LinkPlusCircleNotchedProps>;

export default LinkPlusCircleNotched;
export { LinkPlusCircleNotched };
