import { SvelteComponent } from 'svelte';

export interface MedalCheckStrapProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MedalCheckStrap extends SvelteComponent<MedalCheckStrapProps> {}
