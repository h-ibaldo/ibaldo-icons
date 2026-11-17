import { SvelteComponent } from 'svelte';

export interface AtOneTallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AtOneTall extends SvelteComponent<AtOneTallProps> {}
