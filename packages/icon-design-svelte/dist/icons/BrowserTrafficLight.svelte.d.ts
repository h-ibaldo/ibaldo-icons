import { SvelteComponent } from 'svelte';

export interface BrowserTrafficLightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BrowserTrafficLight extends SvelteComponent<BrowserTrafficLightProps> {}
