import { SvelteComponent } from 'svelte';

export interface CameraKnobProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CameraKnob extends SvelteComponent<CameraKnobProps> {}
