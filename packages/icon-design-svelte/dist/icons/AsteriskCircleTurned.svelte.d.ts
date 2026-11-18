import { SvelteComponent } from 'svelte';

export interface AsteriskCircleTurnedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AsteriskCircleTurned extends SvelteComponent<AsteriskCircleTurnedProps> {}
