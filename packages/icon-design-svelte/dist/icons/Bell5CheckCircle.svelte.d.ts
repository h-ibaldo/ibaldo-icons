import { SvelteComponent } from 'svelte';

export interface Bell5CheckCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bell5CheckCircle extends SvelteComponent<Bell5CheckCircleProps> {}
