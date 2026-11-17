import { SvelteComponent } from 'svelte';

export interface Tab4CheckCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Tab4CheckCircle extends SvelteComponent<Tab4CheckCircleProps> {}
