import { SvelteComponent } from 'svelte';

export interface LaptopWrenchCornerProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LaptopWrenchCorner extends SvelteComponent<LaptopWrenchCornerProps> {}
