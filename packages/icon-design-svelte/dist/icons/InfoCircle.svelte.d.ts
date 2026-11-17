import { SvelteComponent } from 'svelte';

export interface InfoCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class InfoCircle extends SvelteComponent<InfoCircleProps> {}
