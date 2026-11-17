import { SvelteComponent } from 'svelte';

export interface Bell6PlusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bell6Plus extends SvelteComponent<Bell6PlusProps> {}
