import { SvelteComponent } from 'svelte';

export interface AsteriskFiveCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AsteriskFiveCircle extends SvelteComponent<AsteriskFiveCircleProps> {}
