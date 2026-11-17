import { SvelteComponent } from 'svelte';

export interface Bell1XCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bell1XCircle extends SvelteComponent<Bell1XCircleProps> {}
