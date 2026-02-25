import { SvelteComponent } from 'svelte';

export interface GearSettings2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GearSettings2 extends SvelteComponent<GearSettings2Props> {}
