import { SvelteComponent } from 'svelte';

export interface ArrowCircle3SlashProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowCircle3Slash extends SvelteComponent<ArrowCircle3SlashProps> {}
