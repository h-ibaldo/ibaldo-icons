import { SvelteComponent } from 'svelte';

export interface SpinnerProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Spinner extends SvelteComponent<SpinnerProps> {}
