import { SvelteComponent } from 'svelte';

export interface WindowPlain2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowPlain2 extends SvelteComponent<WindowPlain2Props> {}
