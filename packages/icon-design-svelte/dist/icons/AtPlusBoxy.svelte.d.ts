import { SvelteComponent } from 'svelte';

export interface AtPlusBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AtPlusBoxy extends SvelteComponent<AtPlusBoxyProps> {}
