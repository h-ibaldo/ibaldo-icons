import { SvelteComponent } from 'svelte';

export interface AlarmBareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AlarmBare extends SvelteComponent<AlarmBareProps> {}
