import { SvelteComponent } from 'svelte';

export interface BrowserContentProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BrowserContent extends SvelteComponent<BrowserContentProps> {}
