import { SvelteComponent } from 'svelte';

export interface PencilPlusThreeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PencilPlusThree extends SvelteComponent<PencilPlusThreeProps> {}
