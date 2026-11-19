import type { DefineComponent } from 'vue';

export interface LinkPlusCircleBarProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkPlusCircleBar: DefineComponent<LinkPlusCircleBarProps>;

export default LinkPlusCircleBar;
export { LinkPlusCircleBar };
