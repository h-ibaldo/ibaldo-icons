import { SvelteComponent } from 'svelte';

export interface MapPinWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MapPinWide extends SvelteComponent<MapPinWideProps> {}
