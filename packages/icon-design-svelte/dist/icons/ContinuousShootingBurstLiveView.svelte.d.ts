import { SvelteComponent } from 'svelte';

export interface ContinuousShootingBurstLiveViewProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ContinuousShootingBurstLiveView extends SvelteComponent<ContinuousShootingBurstLiveViewProps> {}
