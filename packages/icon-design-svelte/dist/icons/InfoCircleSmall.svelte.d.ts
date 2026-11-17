import { SvelteComponent } from 'svelte';

export interface InfoCircleSmallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class InfoCircleSmall extends SvelteComponent<InfoCircleSmallProps> {}
