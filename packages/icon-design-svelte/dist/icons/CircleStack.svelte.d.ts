import { SvelteComponent } from 'svelte';

export interface CircleStackProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CircleStack extends SvelteComponent<CircleStackProps> {}
