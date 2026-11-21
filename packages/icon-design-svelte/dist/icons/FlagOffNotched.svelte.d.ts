import { SvelteComponent } from 'svelte';

export interface FlagOffNotchedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FlagOffNotched extends SvelteComponent<FlagOffNotchedProps> {}
