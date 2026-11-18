import { SvelteComponent } from 'svelte';

export interface AlarmQuestionArcProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AlarmQuestionArc extends SvelteComponent<AlarmQuestionArcProps> {}
