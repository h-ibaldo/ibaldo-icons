import { SvelteComponent } from 'svelte';

export interface Bell4PlusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bell4Plus extends SvelteComponent<Bell4PlusProps> {}
