import { SvelteComponent } from 'svelte';

export interface PhoneUnlockSharpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PhoneUnlockSharp extends SvelteComponent<PhoneUnlockSharpProps> {}
