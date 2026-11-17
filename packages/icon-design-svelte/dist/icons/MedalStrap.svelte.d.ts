import { SvelteComponent } from 'svelte';

export interface MedalStrapProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MedalStrap extends SvelteComponent<MedalStrapProps> {}
