import type { DefineComponent } from 'vue';

export interface LinkSplitApartProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkSplitApart: DefineComponent<LinkSplitApartProps>;

export default LinkSplitApart;
export { LinkSplitApart };
