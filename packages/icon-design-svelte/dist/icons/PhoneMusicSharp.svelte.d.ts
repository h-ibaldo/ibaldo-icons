import { SvelteComponent } from 'svelte';

export interface PhoneMusicSharpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PhoneMusicSharp extends SvelteComponent<PhoneMusicSharpProps> {}
