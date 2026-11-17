import { SvelteComponent } from 'svelte';

export interface PencilUnderlineAngularProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PencilUnderlineAngular extends SvelteComponent<PencilUnderlineAngularProps> {}
