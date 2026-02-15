import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SystemDiagnosticClipboardPulseProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SystemDiagnosticClipboardPulse: ForwardRefExoticComponent<SystemDiagnosticClipboardPulseProps & RefAttributes<SVGSVGElement>>;

export default SystemDiagnosticClipboardPulse;
export { SystemDiagnosticClipboardPulse };
