import { SvelteComponent } from 'svelte';

export interface HouseEavesProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HouseEaves extends SvelteComponent<HouseEavesProps> {}
