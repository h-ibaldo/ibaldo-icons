import { SvelteComponent } from 'svelte';

export interface AdvancedSearchGearProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AdvancedSearchGear extends SvelteComponent<AdvancedSearchGearProps> {}
