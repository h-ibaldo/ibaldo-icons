import { SvelteComponent } from 'svelte';

export interface HeadphonesPaddedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HeadphonesPadded extends SvelteComponent<HeadphonesPaddedProps> {}
