import { SvelteComponent } from 'svelte';

export interface AlertSquareStackSideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AlertSquareStackSide extends SvelteComponent<AlertSquareStackSideProps> {}
