import { SvelteComponent } from 'svelte';

export interface ArrowsSynchronizeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowsSynchronize extends SvelteComponent<ArrowsSynchronizeProps> {}
