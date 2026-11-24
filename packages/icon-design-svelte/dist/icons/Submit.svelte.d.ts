import { SvelteComponent } from 'svelte';

export interface SubmitProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Submit extends SvelteComponent<SubmitProps> {}
