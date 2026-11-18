import { SvelteComponent } from 'svelte';

export interface AlarmPieBareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AlarmPieBare extends SvelteComponent<AlarmPieBareProps> {}
