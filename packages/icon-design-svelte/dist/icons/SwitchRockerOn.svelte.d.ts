import { SvelteComponent } from 'svelte';

export interface SwitchRockerOnProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SwitchRockerOn extends SvelteComponent<SwitchRockerOnProps> {}
