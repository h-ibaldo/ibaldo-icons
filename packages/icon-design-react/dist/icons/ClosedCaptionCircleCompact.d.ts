import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClosedCaptionCircleCompactProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClosedCaptionCircleCompact: ForwardRefExoticComponent<ClosedCaptionCircleCompactProps & RefAttributes<SVGSVGElement>>;

export default ClosedCaptionCircleCompact;
export { ClosedCaptionCircleCompact };
