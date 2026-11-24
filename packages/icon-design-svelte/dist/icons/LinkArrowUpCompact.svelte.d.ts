import { SvelteComponent } from 'svelte';

export interface LinkArrowUpCompactProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkArrowUpCompact extends SvelteComponent<LinkArrowUpCompactProps> {}
