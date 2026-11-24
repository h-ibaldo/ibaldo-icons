import { SvelteComponent } from 'svelte';

export interface SelfieProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Selfie extends SvelteComponent<SelfieProps> {}
