import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClipboardMinusCenterProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClipboardMinusCenter: ForwardRefExoticComponent<ClipboardMinusCenterProps & RefAttributes<SVGSVGElement>>;

export default ClipboardMinusCenter;
export { ClipboardMinusCenter };
