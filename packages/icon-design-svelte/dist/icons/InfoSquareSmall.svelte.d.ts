import { SvelteComponent } from 'svelte';

export interface InfoSquareSmallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class InfoSquareSmall extends SvelteComponent<InfoSquareSmallProps> {}
