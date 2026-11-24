import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FlipHorizontalInProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FlipHorizontalIn: ForwardRefExoticComponent<FlipHorizontalInProps & RefAttributes<SVGSVGElement>>;

export default FlipHorizontalIn;
export { FlipHorizontalIn };
