import { SvelteComponent } from 'svelte';

export interface Bell5PlusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bell5Plus extends SvelteComponent<Bell5PlusProps> {}
