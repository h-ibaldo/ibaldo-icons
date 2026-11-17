import { SvelteComponent } from 'svelte';

export interface Bell2XCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bell2XCircle extends SvelteComponent<Bell2XCircleProps> {}
