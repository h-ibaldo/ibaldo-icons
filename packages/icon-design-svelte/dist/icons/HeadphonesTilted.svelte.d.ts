import { SvelteComponent } from 'svelte';

export interface HeadphonesTiltedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HeadphonesTilted extends SvelteComponent<HeadphonesTiltedProps> {}
