import { SvelteComponent } from 'svelte';

export interface PhonePlusOneSharpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PhonePlusOneSharp extends SvelteComponent<PhonePlusOneSharpProps> {}
