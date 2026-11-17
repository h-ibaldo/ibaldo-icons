import { SvelteComponent } from 'svelte';

export interface AtSign5PlusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AtSign5Plus extends SvelteComponent<AtSign5PlusProps> {}
