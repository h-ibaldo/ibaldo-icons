import { SvelteComponent } from 'svelte';

export interface PhoneTransferSharpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PhoneTransferSharp extends SvelteComponent<PhoneTransferSharpProps> {}
