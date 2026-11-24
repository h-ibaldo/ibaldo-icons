import { SvelteComponent } from 'svelte';

export interface VolumeHighOffWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class VolumeHighOffWide extends SvelteComponent<VolumeHighOffWideProps> {}
