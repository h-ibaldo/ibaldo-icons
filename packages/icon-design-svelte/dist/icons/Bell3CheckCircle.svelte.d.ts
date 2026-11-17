import { SvelteComponent } from 'svelte';

export interface Bell3CheckCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bell3CheckCircle extends SvelteComponent<Bell3CheckCircleProps> {}
