import { SvelteComponent } from 'svelte';

export interface PointerQuestionStraightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PointerQuestionStraight extends SvelteComponent<PointerQuestionStraightProps> {}
