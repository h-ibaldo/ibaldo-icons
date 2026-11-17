import { SvelteComponent } from 'svelte';

export interface VolumeHighWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class VolumeHighWide extends SvelteComponent<VolumeHighWideProps> {}
