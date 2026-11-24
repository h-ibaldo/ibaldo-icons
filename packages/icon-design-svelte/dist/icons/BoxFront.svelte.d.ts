import { SvelteComponent } from 'svelte';

export interface BoxFrontProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BoxFront extends SvelteComponent<BoxFrontProps> {}
