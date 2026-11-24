import { SvelteComponent } from 'svelte';

export interface PipetteProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Pipette extends SvelteComponent<PipetteProps> {}
