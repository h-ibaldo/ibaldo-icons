import { SvelteComponent } from 'svelte';

export interface MusicSixteenthProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MusicSixteenth extends SvelteComponent<MusicSixteenthProps> {}
