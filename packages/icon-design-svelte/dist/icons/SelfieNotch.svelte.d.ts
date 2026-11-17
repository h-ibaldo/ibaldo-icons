import { SvelteComponent } from 'svelte';

export interface SelfieNotchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SelfieNotch extends SvelteComponent<SelfieNotchProps> {}
