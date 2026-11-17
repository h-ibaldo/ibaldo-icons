import { SvelteComponent } from 'svelte';

export interface Bell2CircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bell2Circle extends SvelteComponent<Bell2CircleProps> {}
