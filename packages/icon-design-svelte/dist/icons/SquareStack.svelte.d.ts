import { SvelteComponent } from 'svelte';

export interface SquareStackProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SquareStack extends SvelteComponent<SquareStackProps> {}
