import { SvelteComponent } from 'svelte';

export interface PhoneArrowUpRightCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PhoneArrowUpRightCircle extends SvelteComponent<PhoneArrowUpRightCircleProps> {}
