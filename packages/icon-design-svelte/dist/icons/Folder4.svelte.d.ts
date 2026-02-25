import { SvelteComponent } from 'svelte';

export interface Folder4Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Folder4 extends SvelteComponent<Folder4Props> {}
