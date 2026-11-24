import { SvelteComponent } from 'svelte';

export interface RecordRingCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class RecordRingCircle extends SvelteComponent<RecordRingCircleProps> {}
