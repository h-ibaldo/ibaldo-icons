import type { DefineComponent } from 'vue';

export interface LinkPlusSlantedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkPlusSlanted: DefineComponent<LinkPlusSlantedProps>;

export default LinkPlusSlanted;
export { LinkPlusSlanted };
