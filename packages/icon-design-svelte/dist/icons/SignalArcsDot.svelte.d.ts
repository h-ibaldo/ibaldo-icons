import { SvelteComponent } from 'svelte';

export interface SignalArcsDotProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SignalArcsDot extends SvelteComponent<SignalArcsDotProps> {}
