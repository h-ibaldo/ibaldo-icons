import { SvelteComponent } from 'svelte';

export interface StopwatchQuestionTickProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class StopwatchQuestionTick extends SvelteComponent<StopwatchQuestionTickProps> {}
