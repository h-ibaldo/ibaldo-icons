import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClosedCaptionProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClosedCaption: ForwardRefExoticComponent<ClosedCaptionProps & RefAttributes<SVGSVGElement>>;

export default ClosedCaption;
export { ClosedCaption };
