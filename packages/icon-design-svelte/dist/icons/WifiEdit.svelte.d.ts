import { SvelteComponent } from 'svelte';

export interface WifiEditProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WifiEdit extends SvelteComponent<WifiEditProps> {}
