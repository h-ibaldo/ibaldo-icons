import { SvelteComponent } from 'svelte';

export interface Bell5XCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bell5XCircle extends SvelteComponent<Bell5XCircleProps> {}
