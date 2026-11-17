import { SvelteComponent } from 'svelte';

export interface ClipboardListXProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClipboardListX extends SvelteComponent<ClipboardListXProps> {}
