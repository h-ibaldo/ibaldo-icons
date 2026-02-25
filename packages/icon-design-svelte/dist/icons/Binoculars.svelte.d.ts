import { SvelteComponent } from 'svelte';

export interface BinocularsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Binoculars extends SvelteComponent<BinocularsProps> {}
