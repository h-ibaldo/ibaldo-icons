import { SvelteComponent } from 'svelte';

export interface VolumeMediumWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class VolumeMediumWide extends SvelteComponent<VolumeMediumWideProps> {}
