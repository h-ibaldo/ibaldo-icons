import { SvelteComponent } from 'svelte';

export interface AlarmQuestionStraightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AlarmQuestionStraight extends SvelteComponent<AlarmQuestionStraightProps> {}
