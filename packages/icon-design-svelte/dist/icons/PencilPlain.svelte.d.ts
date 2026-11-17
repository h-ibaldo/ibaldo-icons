import { SvelteComponent } from 'svelte';

export interface PencilPlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PencilPlain extends SvelteComponent<PencilPlainProps> {}
