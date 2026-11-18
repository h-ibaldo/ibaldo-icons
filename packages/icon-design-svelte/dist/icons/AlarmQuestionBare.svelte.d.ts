import { SvelteComponent } from 'svelte';

export interface AlarmQuestionBareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AlarmQuestionBare extends SvelteComponent<AlarmQuestionBareProps> {}
