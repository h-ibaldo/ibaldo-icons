import { SvelteComponent } from 'svelte';

export interface PhoneCheckSharpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PhoneCheckSharp extends SvelteComponent<PhoneCheckSharpProps> {}
