import { SvelteComponent } from 'svelte';

export interface ClockArrowsSynchronizeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClockArrowsSynchronize extends SvelteComponent<ClockArrowsSynchronizeProps> {}
