import { SvelteComponent } from 'svelte';

export interface BatteryTriangleBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BatteryTriangleBoxy extends SvelteComponent<BatteryTriangleBoxyProps> {}
