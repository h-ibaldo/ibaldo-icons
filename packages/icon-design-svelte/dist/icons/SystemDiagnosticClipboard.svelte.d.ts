import { SvelteComponent } from 'svelte';

export interface SystemDiagnosticClipboardProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SystemDiagnosticClipboard extends SvelteComponent<SystemDiagnosticClipboardProps> {}
