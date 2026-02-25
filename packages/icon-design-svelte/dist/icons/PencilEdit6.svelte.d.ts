import { SvelteComponent } from 'svelte';

export interface PencilEdit6Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PencilEdit6 extends SvelteComponent<PencilEdit6Props> {}
