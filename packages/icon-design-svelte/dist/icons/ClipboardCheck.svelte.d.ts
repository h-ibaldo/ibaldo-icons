import { SvelteComponent } from 'svelte';

export interface ClipboardCheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClipboardCheck extends SvelteComponent<ClipboardCheckProps> {}
