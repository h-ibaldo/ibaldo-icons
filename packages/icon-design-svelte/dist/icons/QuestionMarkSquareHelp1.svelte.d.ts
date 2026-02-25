import { SvelteComponent } from 'svelte';

export interface QuestionMarkSquareHelp1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class QuestionMarkSquareHelp1 extends SvelteComponent<QuestionMarkSquareHelp1Props> {}
