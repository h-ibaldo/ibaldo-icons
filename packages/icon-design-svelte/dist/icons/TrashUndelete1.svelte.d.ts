import { SvelteComponent } from 'svelte';

export interface TrashUndelete1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TrashUndelete1 extends SvelteComponent<TrashUndelete1Props> {}
