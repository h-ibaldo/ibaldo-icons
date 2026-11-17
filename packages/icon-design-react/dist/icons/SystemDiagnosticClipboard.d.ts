import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SystemDiagnosticClipboardProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SystemDiagnosticClipboard: ForwardRefExoticComponent<SystemDiagnosticClipboardProps & RefAttributes<SVGSVGElement>>;

export default SystemDiagnosticClipboard;
export { SystemDiagnosticClipboard };
