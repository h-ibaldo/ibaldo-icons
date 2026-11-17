import { SvelteComponent } from 'svelte';

export interface LinkSplitCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkSplitCircle extends SvelteComponent<LinkSplitCircleProps> {}
