import { SvelteComponent } from 'svelte';

export interface CheckCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CheckCircle extends SvelteComponent<CheckCircleProps> {}
