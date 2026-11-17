import { SvelteComponent } from 'svelte';

export interface MedalOneHookProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MedalOneHook extends SvelteComponent<MedalOneHookProps> {}
