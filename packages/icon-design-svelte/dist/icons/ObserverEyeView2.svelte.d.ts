import { SvelteComponent } from 'svelte';

export interface ObserverEyeView2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ObserverEyeView2 extends SvelteComponent<ObserverEyeView2Props> {}
