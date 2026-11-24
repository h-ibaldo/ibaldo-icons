import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FlipVerticalInDashedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FlipVerticalInDashed: ForwardRefExoticComponent<FlipVerticalInDashedProps & RefAttributes<SVGSVGElement>>;

export default FlipVerticalInDashed;
export { FlipVerticalInDashed };
