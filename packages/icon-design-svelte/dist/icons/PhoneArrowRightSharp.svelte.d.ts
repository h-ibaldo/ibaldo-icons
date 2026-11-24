import { SvelteComponent } from 'svelte';

export interface PhoneArrowRightSharpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PhoneArrowRightSharp extends SvelteComponent<PhoneArrowRightSharpProps> {}
