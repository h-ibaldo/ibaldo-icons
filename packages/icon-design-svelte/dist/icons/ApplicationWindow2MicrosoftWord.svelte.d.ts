import { SvelteComponent } from 'svelte';

export interface ApplicationWindow2MicrosoftWordProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ApplicationWindow2MicrosoftWord extends SvelteComponent<ApplicationWindow2MicrosoftWordProps> {}
