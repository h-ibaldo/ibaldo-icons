import { SvelteComponent } from 'svelte';

export interface Bell5CircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bell5Circle extends SvelteComponent<Bell5CircleProps> {}
