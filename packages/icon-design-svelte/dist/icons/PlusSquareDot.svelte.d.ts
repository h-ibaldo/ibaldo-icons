import { SvelteComponent } from 'svelte';

export interface PlusSquareDotProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PlusSquareDot extends SvelteComponent<PlusSquareDotProps> {}
