import { SvelteComponent } from 'svelte';

export interface RadioCheckOpenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class RadioCheckOpen extends SvelteComponent<RadioCheckOpenProps> {}
