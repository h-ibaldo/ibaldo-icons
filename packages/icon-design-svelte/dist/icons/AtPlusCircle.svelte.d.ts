import { SvelteComponent } from 'svelte';

export interface AtPlusCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AtPlusCircle extends SvelteComponent<AtPlusCircleProps> {}
