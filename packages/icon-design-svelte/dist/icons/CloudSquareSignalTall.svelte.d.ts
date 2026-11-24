import { SvelteComponent } from 'svelte';

export interface CloudSquareSignalTallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudSquareSignalTall extends SvelteComponent<CloudSquareSignalTallProps> {}
