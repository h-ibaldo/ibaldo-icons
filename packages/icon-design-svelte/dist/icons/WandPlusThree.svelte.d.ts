import { SvelteComponent } from 'svelte';

export interface WandPlusThreeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WandPlusThree extends SvelteComponent<WandPlusThreeProps> {}
