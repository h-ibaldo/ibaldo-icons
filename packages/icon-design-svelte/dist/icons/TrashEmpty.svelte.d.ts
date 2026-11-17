import { SvelteComponent } from 'svelte';

export interface TrashEmptyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TrashEmpty extends SvelteComponent<TrashEmptyProps> {}
