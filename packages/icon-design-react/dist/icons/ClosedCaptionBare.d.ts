import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClosedCaptionBareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClosedCaptionBare: ForwardRefExoticComponent<ClosedCaptionBareProps & RefAttributes<SVGSVGElement>>;

export default ClosedCaptionBare;
export { ClosedCaptionBare };
