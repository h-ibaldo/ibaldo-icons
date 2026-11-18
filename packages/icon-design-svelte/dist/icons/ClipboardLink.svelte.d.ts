import { SvelteComponent } from 'svelte';

export interface ClipboardLinkProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClipboardLink extends SvelteComponent<ClipboardLinkProps> {}
