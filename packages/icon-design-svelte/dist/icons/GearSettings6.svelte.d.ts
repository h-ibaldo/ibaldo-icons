import { SvelteComponent } from 'svelte';

export interface GearSettings6Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GearSettings6 extends SvelteComponent<GearSettings6Props> {}
