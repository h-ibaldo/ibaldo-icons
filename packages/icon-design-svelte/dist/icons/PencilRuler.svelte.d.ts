import { SvelteComponent } from 'svelte';

export interface PencilRulerProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PencilRuler extends SvelteComponent<PencilRulerProps> {}
