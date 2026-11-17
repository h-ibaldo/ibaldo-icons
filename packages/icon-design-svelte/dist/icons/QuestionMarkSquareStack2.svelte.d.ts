import { SvelteComponent } from 'svelte';

export interface QuestionMarkSquareStack2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class QuestionMarkSquareStack2 extends SvelteComponent<QuestionMarkSquareStack2Props> {}
