import { SvelteComponent } from 'svelte';

export interface SaveSaquareLineDownProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SaveSaquareLineDown extends SvelteComponent<SaveSaquareLineDownProps> {}
