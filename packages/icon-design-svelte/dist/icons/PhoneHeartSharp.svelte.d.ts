import { SvelteComponent } from 'svelte';

export interface PhoneHeartSharpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PhoneHeartSharp extends SvelteComponent<PhoneHeartSharpProps> {}
