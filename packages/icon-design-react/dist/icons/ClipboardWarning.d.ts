import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClipboardWarningProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClipboardWarning: ForwardRefExoticComponent<ClipboardWarningProps & RefAttributes<SVGSVGElement>>;

export default ClipboardWarning;
export { ClipboardWarning };
