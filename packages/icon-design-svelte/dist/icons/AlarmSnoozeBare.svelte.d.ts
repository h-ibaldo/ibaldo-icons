import { SvelteComponent } from 'svelte';

export interface AlarmSnoozeBareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AlarmSnoozeBare extends SvelteComponent<AlarmSnoozeBareProps> {}
