import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClosedCaptionOctagonProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClosedCaptionOctagon: ForwardRefExoticComponent<ClosedCaptionOctagonProps & RefAttributes<SVGSVGElement>>;

export default ClosedCaptionOctagon;
export { ClosedCaptionOctagon };
