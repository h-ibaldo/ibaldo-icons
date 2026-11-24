import { SvelteComponent } from 'svelte';

export interface AlarmXProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AlarmX extends SvelteComponent<AlarmXProps> {}
