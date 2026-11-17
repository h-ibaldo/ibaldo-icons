import { SvelteComponent } from 'svelte';

export interface AtSign5CheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AtSign5Check extends SvelteComponent<AtSign5CheckProps> {}
