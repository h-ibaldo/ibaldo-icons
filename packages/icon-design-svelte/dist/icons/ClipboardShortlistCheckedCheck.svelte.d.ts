import { SvelteComponent } from 'svelte';

export interface ClipboardShortlistCheckedCheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClipboardShortlistCheckedCheck extends SvelteComponent<ClipboardShortlistCheckedCheckProps> {}
