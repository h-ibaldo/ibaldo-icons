import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FlipVerticalDashedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FlipVerticalDashed: ForwardRefExoticComponent<FlipVerticalDashedProps & RefAttributes<SVGSVGElement>>;

export default FlipVerticalDashed;
export { FlipVerticalDashed };
