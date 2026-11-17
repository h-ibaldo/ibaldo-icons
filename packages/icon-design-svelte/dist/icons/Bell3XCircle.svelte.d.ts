import { SvelteComponent } from 'svelte';

export interface Bell3XCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bell3XCircle extends SvelteComponent<Bell3XCircleProps> {}
