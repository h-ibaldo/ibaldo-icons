import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LayoutLargeFlowerFramedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LayoutLargeFlowerFramed: ForwardRefExoticComponent<LayoutLargeFlowerFramedProps & RefAttributes<SVGSVGElement>>;

export default LayoutLargeFlowerFramed;
export { LayoutLargeFlowerFramed };
