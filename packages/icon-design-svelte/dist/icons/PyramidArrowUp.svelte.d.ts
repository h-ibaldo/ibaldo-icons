import { SvelteComponent } from 'svelte';

export interface PyramidArrowUpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PyramidArrowUp extends SvelteComponent<PyramidArrowUpProps> {}
