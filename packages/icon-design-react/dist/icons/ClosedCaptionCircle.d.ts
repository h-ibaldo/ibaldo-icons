import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClosedCaptionCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClosedCaptionCircle: ForwardRefExoticComponent<ClosedCaptionCircleProps & RefAttributes<SVGSVGElement>>;

export default ClosedCaptionCircle;
export { ClosedCaptionCircle };
