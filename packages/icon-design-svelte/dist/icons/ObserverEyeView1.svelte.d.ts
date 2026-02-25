import { SvelteComponent } from 'svelte';

export interface ObserverEyeView1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ObserverEyeView1 extends SvelteComponent<ObserverEyeView1Props> {}
