import { SvelteComponent } from 'svelte';

export interface AtPlusTallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AtPlusTall extends SvelteComponent<AtPlusTallProps> {}
