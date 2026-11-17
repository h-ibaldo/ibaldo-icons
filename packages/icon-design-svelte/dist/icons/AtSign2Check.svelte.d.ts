import { SvelteComponent } from 'svelte';

export interface AtSign2CheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AtSign2Check extends SvelteComponent<AtSign2CheckProps> {}
