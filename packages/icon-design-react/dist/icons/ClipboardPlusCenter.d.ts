import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClipboardPlusCenterProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClipboardPlusCenter: ForwardRefExoticComponent<ClipboardPlusCenterProps & RefAttributes<SVGSVGElement>>;

export default ClipboardPlusCenter;
export { ClipboardPlusCenter };
