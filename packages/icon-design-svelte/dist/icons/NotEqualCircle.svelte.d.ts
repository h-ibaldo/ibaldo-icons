import { SvelteComponent } from 'svelte';

export interface NotEqualCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class NotEqualCircle extends SvelteComponent<NotEqualCircleProps> {}
