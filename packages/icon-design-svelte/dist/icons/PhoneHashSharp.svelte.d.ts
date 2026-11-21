import { SvelteComponent } from 'svelte';

export interface PhoneHashSharpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PhoneHashSharp extends SvelteComponent<PhoneHashSharpProps> {}
