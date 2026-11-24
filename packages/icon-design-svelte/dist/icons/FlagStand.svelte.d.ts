import { SvelteComponent } from 'svelte';

export interface FlagStandProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FlagStand extends SvelteComponent<FlagStandProps> {}
