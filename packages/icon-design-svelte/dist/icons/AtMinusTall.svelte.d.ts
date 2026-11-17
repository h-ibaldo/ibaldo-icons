import { SvelteComponent } from 'svelte';

export interface AtMinusTallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AtMinusTall extends SvelteComponent<AtMinusTallProps> {}
