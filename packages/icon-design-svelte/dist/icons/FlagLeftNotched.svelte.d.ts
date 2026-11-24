import { SvelteComponent } from 'svelte';

export interface FlagLeftNotchedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FlagLeftNotched extends SvelteComponent<FlagLeftNotchedProps> {}
