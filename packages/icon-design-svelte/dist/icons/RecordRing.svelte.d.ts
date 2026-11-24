import { SvelteComponent } from 'svelte';

export interface RecordRingProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class RecordRing extends SvelteComponent<RecordRingProps> {}
