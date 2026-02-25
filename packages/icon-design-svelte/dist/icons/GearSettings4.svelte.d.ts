import { SvelteComponent } from 'svelte';

export interface GearSettings4Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GearSettings4 extends SvelteComponent<GearSettings4Props> {}
