import { SvelteComponent } from 'svelte';

export interface StopwatchQuestionBareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class StopwatchQuestionBare extends SvelteComponent<StopwatchQuestionBareProps> {}
