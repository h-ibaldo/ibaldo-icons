import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClosedCaptionOctagonCompactProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClosedCaptionOctagonCompact: ForwardRefExoticComponent<ClosedCaptionOctagonCompactProps & RefAttributes<SVGSVGElement>>;

export default ClosedCaptionOctagonCompact;
export { ClosedCaptionOctagonCompact };
