import type { DefineComponent } from 'vue';

export interface LinkSplitSlantedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkSplitSlanted: DefineComponent<LinkSplitSlantedProps>;

export default LinkSplitSlanted;
export { LinkSplitSlanted };
