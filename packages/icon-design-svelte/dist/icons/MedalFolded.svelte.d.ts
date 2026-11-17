import { SvelteComponent } from 'svelte';

export interface MedalFoldedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MedalFolded extends SvelteComponent<MedalFoldedProps> {}
