import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FlipHorizontalInDashedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FlipHorizontalInDashed: ForwardRefExoticComponent<FlipHorizontalInDashedProps & RefAttributes<SVGSVGElement>>;

export default FlipHorizontalInDashed;
export { FlipHorizontalInDashed };
