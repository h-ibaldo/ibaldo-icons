import type { DefineComponent } from 'vue';

export interface LinkSplitSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkSplitSquare: DefineComponent<LinkSplitSquareProps>;

export default LinkSplitSquare;
export { LinkSplitSquare };
