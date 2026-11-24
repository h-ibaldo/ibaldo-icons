import { SvelteComponent } from 'svelte';

export interface MedalHookProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MedalHook extends SvelteComponent<MedalHookProps> {}
