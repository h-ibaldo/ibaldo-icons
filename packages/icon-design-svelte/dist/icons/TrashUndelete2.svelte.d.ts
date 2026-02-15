import { SvelteComponent } from 'svelte';

export interface TrashUndelete2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TrashUndelete2 extends SvelteComponent<TrashUndelete2Props> {}
