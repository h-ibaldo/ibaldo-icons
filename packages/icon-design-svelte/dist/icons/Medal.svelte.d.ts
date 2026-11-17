import { SvelteComponent } from 'svelte';

export interface MedalProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Medal extends SvelteComponent<MedalProps> {}
