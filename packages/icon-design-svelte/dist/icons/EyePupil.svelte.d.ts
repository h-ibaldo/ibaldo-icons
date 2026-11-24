import { SvelteComponent } from 'svelte';

export interface EyePupilProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class EyePupil extends SvelteComponent<EyePupilProps> {}
