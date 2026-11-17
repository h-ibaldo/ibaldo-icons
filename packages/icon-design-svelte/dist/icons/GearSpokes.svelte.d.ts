import { SvelteComponent } from 'svelte';

export interface GearSpokesProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GearSpokes extends SvelteComponent<GearSpokesProps> {}
