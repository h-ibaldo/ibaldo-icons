import { SvelteComponent } from 'svelte';

export interface PhoneBanSharpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PhoneBanSharp extends SvelteComponent<PhoneBanSharpProps> {}
