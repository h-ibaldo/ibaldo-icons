import { SvelteComponent } from 'svelte';

export interface ApertureProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Aperture extends SvelteComponent<ApertureProps> {}
