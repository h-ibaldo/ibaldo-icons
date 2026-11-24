import { SvelteComponent } from 'svelte';

export interface ArrowOrbitAxisProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowOrbitAxis extends SvelteComponent<ArrowOrbitAxisProps> {}
