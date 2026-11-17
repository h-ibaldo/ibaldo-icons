import { SvelteComponent } from 'svelte';

export interface TrashDelete42Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TrashDelete42 extends SvelteComponent<TrashDelete42Props> {}
