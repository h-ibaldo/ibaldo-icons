import { SvelteComponent } from 'svelte';

export interface AsteriskCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AsteriskCircle extends SvelteComponent<AsteriskCircleProps> {}
