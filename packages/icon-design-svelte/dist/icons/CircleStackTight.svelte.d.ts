import { SvelteComponent } from 'svelte';

export interface CircleStackTightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CircleStackTight extends SvelteComponent<CircleStackTightProps> {}
