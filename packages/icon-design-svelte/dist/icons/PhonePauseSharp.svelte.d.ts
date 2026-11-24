import { SvelteComponent } from 'svelte';

export interface PhonePauseSharpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PhonePauseSharp extends SvelteComponent<PhonePauseSharpProps> {}
