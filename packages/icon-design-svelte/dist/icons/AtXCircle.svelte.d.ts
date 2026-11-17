import { SvelteComponent } from 'svelte';

export interface AtXCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AtXCircle extends SvelteComponent<AtXCircleProps> {}
