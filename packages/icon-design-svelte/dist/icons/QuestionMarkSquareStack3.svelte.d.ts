import { SvelteComponent } from 'svelte';

export interface QuestionMarkSquareStack3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class QuestionMarkSquareStack3 extends SvelteComponent<QuestionMarkSquareStack3Props> {}
