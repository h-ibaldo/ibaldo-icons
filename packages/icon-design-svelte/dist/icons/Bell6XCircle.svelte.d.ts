import { SvelteComponent } from 'svelte';

export interface Bell6XCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bell6XCircle extends SvelteComponent<Bell6XCircleProps> {}
