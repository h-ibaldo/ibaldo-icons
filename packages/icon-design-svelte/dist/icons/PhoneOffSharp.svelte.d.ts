import { SvelteComponent } from 'svelte';

export interface PhoneOffSharpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PhoneOffSharp extends SvelteComponent<PhoneOffSharpProps> {}
