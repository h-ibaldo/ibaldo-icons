import { SvelteComponent } from 'svelte';

export interface AlarmXBareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AlarmXBare extends SvelteComponent<AlarmXBareProps> {}
