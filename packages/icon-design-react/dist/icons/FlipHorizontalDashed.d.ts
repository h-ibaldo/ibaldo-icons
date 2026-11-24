import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FlipHorizontalDashedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FlipHorizontalDashed: ForwardRefExoticComponent<FlipHorizontalDashedProps & RefAttributes<SVGSVGElement>>;

export default FlipHorizontalDashed;
export { FlipHorizontalDashed };
