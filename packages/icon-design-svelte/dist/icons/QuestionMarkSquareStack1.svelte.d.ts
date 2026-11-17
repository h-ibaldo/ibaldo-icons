import { SvelteComponent } from 'svelte';

export interface QuestionMarkSquareStack1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class QuestionMarkSquareStack1 extends SvelteComponent<QuestionMarkSquareStack1Props> {}
