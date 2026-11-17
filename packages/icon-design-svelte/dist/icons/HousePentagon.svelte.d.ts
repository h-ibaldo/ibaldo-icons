import { SvelteComponent } from 'svelte';

export interface HousePentagonProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HousePentagon extends SvelteComponent<HousePentagonProps> {}
