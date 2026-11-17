import { SvelteComponent } from 'svelte';

export interface AlarmQuestionProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AlarmQuestion extends SvelteComponent<AlarmQuestionProps> {}
