import { SvelteComponent } from 'svelte';

export interface AtSign4PlusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AtSign4Plus extends SvelteComponent<AtSign4PlusProps> {}
