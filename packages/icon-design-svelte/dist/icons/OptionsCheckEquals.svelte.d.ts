import { SvelteComponent } from 'svelte';

export interface OptionsCheckEqualsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class OptionsCheckEquals extends SvelteComponent<OptionsCheckEqualsProps> {}
