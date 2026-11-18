import { SvelteComponent } from 'svelte';

export interface VolumeLowWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class VolumeLowWide extends SvelteComponent<VolumeLowWideProps> {}
