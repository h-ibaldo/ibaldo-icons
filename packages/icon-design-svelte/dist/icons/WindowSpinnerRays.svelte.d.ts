import { SvelteComponent } from 'svelte';

export interface WindowSpinnerRaysProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowSpinnerRays extends SvelteComponent<WindowSpinnerRaysProps> {}
