import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClosedCaptionSquareSmallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClosedCaptionSquareSmall: ForwardRefExoticComponent<ClosedCaptionSquareSmallProps & RefAttributes<SVGSVGElement>>;

export default ClosedCaptionSquareSmall;
export { ClosedCaptionSquareSmall };
