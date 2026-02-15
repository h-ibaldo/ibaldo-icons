import { SvelteComponent } from 'svelte';

export interface GearSettings1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GearSettings1 extends SvelteComponent<GearSettings1Props> {}
