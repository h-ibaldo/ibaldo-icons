import { SvelteComponent } from 'svelte';

export interface Bell2AngleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bell2Angle extends SvelteComponent<Bell2AngleProps> {}
