import { SvelteComponent } from 'svelte';

export interface PhoneRaysSharpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PhoneRaysSharp extends SvelteComponent<PhoneRaysSharpProps> {}
