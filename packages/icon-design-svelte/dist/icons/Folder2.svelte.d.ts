import { SvelteComponent } from 'svelte';

export interface Folder2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Folder2 extends SvelteComponent<Folder2Props> {}
