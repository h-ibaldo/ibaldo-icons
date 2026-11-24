import { SvelteComponent } from 'svelte';

export interface SaveEdit2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SaveEdit2 extends SvelteComponent<SaveEdit2Props> {}
