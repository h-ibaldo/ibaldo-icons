import { SvelteComponent } from 'svelte';

export interface PhoneListSharpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PhoneListSharp extends SvelteComponent<PhoneListSharpProps> {}
