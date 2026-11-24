import { SvelteComponent } from 'svelte';

export interface SpinnerRaysFadeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SpinnerRaysFade extends SvelteComponent<SpinnerRaysFadeProps> {}
