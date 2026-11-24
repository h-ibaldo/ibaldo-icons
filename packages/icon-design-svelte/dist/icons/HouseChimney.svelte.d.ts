import { SvelteComponent } from 'svelte';

export interface HouseChimneyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HouseChimney extends SvelteComponent<HouseChimneyProps> {}
