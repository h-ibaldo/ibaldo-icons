import { SvelteComponent } from 'svelte';

export interface OptionsCheckXSyncProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class OptionsCheckXSync extends SvelteComponent<OptionsCheckXSyncProps> {}
