import { SvelteComponent } from 'svelte';

export interface FlagNotchedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FlagNotched extends SvelteComponent<FlagNotchedProps> {}
