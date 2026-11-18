import { SvelteComponent } from 'svelte';

export interface AlarmBoltProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AlarmBolt extends SvelteComponent<AlarmBoltProps> {}
