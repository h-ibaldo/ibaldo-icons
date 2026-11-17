import { SvelteComponent } from 'svelte';

export interface ContinuousShootingBurstAFProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ContinuousShootingBurstAF extends SvelteComponent<ContinuousShootingBurstAFProps> {}
