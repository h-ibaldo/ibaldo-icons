import { SvelteComponent } from 'svelte';

export interface SystemDiagnosticClipboardPulseProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SystemDiagnosticClipboardPulse extends SvelteComponent<SystemDiagnosticClipboardPulseProps> {}
