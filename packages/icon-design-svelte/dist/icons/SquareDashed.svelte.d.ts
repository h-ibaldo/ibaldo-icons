import { SvelteComponent } from 'svelte';

export interface SquareDashedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SquareDashed extends SvelteComponent<SquareDashedProps> {}
