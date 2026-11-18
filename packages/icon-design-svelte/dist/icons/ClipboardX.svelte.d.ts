import { SvelteComponent } from 'svelte';

export interface ClipboardXProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClipboardX extends SvelteComponent<ClipboardXProps> {}
