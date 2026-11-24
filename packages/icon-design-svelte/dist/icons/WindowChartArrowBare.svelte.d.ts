import { SvelteComponent } from 'svelte';

export interface WindowChartArrowBareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowChartArrowBare extends SvelteComponent<WindowChartArrowBareProps> {}
