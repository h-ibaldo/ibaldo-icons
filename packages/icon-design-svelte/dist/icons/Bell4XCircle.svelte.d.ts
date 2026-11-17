import { SvelteComponent } from 'svelte';

export interface Bell4XCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bell4XCircle extends SvelteComponent<Bell4XCircleProps> {}
