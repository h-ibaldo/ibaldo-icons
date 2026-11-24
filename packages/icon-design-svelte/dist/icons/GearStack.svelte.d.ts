import { SvelteComponent } from 'svelte';

export interface GearStackProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GearStack extends SvelteComponent<GearStackProps> {}
