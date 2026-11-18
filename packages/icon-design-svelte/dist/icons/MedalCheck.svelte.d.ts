import { SvelteComponent } from 'svelte';

export interface MedalCheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MedalCheck extends SvelteComponent<MedalCheckProps> {}
