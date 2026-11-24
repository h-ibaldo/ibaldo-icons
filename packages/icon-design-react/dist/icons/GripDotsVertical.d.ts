import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GripDotsVerticalProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GripDotsVertical: ForwardRefExoticComponent<GripDotsVerticalProps & RefAttributes<SVGSVGElement>>;

export default GripDotsVertical;
export { GripDotsVertical };
