import { SvelteComponent } from 'svelte';

export interface TrashLidProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TrashLid extends SvelteComponent<TrashLidProps> {}
