import { SvelteComponent } from 'svelte';

export interface InfoPillarProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class InfoPillar extends SvelteComponent<InfoPillarProps> {}
