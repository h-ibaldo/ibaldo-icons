import { SvelteComponent } from 'svelte';

export interface PhoneTransferDiagonalProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PhoneTransferDiagonal extends SvelteComponent<PhoneTransferDiagonalProps> {}
