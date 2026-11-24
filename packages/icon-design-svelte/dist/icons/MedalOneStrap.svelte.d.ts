import { SvelteComponent } from 'svelte';

export interface MedalOneStrapProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MedalOneStrap extends SvelteComponent<MedalOneStrapProps> {}
