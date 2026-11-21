import { SvelteComponent } from 'svelte';

export interface PhoneXSharpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PhoneXSharp extends SvelteComponent<PhoneXSharpProps> {}
