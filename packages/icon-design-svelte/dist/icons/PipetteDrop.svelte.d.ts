import { SvelteComponent } from 'svelte';

export interface PipetteDropProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PipetteDrop extends SvelteComponent<PipetteDropProps> {}
