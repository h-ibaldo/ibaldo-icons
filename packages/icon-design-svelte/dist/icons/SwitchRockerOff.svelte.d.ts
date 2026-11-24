import { SvelteComponent } from 'svelte';

export interface SwitchRockerOffProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SwitchRockerOff extends SvelteComponent<SwitchRockerOffProps> {}
