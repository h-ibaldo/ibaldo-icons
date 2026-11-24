import { SvelteComponent } from 'svelte';

export interface MedalOneProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MedalOne extends SvelteComponent<MedalOneProps> {}
