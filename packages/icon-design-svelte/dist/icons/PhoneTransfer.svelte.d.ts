import { SvelteComponent } from 'svelte';

export interface PhoneTransferProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PhoneTransfer extends SvelteComponent<PhoneTransferProps> {}
