import { SvelteComponent } from 'svelte';

export interface MoonFullProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MoonFull extends SvelteComponent<MoonFullProps> {}
