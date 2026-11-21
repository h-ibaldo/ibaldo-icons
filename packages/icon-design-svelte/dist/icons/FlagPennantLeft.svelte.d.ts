import { SvelteComponent } from 'svelte';

export interface FlagPennantLeftProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FlagPennantLeft extends SvelteComponent<FlagPennantLeftProps> {}
