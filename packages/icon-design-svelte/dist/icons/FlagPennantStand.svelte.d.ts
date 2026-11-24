import { SvelteComponent } from 'svelte';

export interface FlagPennantStandProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FlagPennantStand extends SvelteComponent<FlagPennantStandProps> {}
