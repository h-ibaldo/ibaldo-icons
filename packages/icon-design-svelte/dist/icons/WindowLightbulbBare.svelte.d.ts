import { SvelteComponent } from 'svelte';

export interface WindowLightbulbBareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowLightbulbBare extends SvelteComponent<WindowLightbulbBareProps> {}
