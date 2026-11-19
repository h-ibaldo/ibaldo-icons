import type { DefineComponent } from 'vue';

export interface LinkSplitCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkSplitCircle: DefineComponent<LinkSplitCircleProps>;

export default LinkSplitCircle;
export { LinkSplitCircle };
