import { SvelteComponent } from 'svelte';

export interface AlarmBoltBareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AlarmBoltBare extends SvelteComponent<AlarmBoltBareProps> {}
