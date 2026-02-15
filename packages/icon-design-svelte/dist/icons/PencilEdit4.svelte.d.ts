import { SvelteComponent } from 'svelte';

export interface PencilEdit4Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PencilEdit4 extends SvelteComponent<PencilEdit4Props> {}
