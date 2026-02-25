import { SvelteComponent } from 'svelte';

export interface GearSettings3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GearSettings3 extends SvelteComponent<GearSettings3Props> {}
