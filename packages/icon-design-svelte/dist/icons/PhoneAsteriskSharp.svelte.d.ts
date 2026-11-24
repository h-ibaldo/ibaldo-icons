import { SvelteComponent } from 'svelte';

export interface PhoneAsteriskSharpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PhoneAsteriskSharp extends SvelteComponent<PhoneAsteriskSharpProps> {}
