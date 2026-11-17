import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClipboardPulseProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClipboardPulse: ForwardRefExoticComponent<ClipboardPulseProps & RefAttributes<SVGSVGElement>>;

export default ClipboardPulse;
export { ClipboardPulse };
