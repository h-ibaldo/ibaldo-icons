import { SvelteComponent } from 'svelte';

export interface SupportFaceProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SupportFace extends SvelteComponent<SupportFaceProps> {}
