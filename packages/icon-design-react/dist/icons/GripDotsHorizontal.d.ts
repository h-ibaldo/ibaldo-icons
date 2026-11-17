import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GripDotsHorizontalProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GripDotsHorizontal: ForwardRefExoticComponent<GripDotsHorizontalProps & RefAttributes<SVGSVGElement>>;

export default GripDotsHorizontal;
export { GripDotsHorizontal };
