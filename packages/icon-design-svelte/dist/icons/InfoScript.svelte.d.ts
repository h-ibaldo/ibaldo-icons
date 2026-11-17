import { SvelteComponent } from 'svelte';

export interface InfoScriptProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class InfoScript extends SvelteComponent<InfoScriptProps> {}
