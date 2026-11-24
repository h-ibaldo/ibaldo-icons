import { SvelteComponent } from 'svelte';

export interface ClipboardListCheckXProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClipboardListCheckX extends SvelteComponent<ClipboardListCheckXProps> {}
