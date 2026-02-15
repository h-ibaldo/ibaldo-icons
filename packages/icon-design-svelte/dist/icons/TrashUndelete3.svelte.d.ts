import { SvelteComponent } from 'svelte';

export interface TrashUndelete3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TrashUndelete3 extends SvelteComponent<TrashUndelete3Props> {}
