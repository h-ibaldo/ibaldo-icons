import { SvelteComponent } from 'svelte';

export interface Folder3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Folder3 extends SvelteComponent<Folder3Props> {}
