import { SvelteComponent } from 'svelte';

export interface UtilityKnifeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UtilityKnife extends SvelteComponent<UtilityKnifeProps> {}
