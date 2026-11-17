import { SvelteComponent } from 'svelte';

export interface ClipboardShortlistCheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClipboardShortlistCheck extends SvelteComponent<ClipboardShortlistCheckProps> {}
