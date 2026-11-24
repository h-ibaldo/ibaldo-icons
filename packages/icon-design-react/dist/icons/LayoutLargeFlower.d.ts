import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LayoutLargeFlowerProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LayoutLargeFlower: ForwardRefExoticComponent<LayoutLargeFlowerProps & RefAttributes<SVGSVGElement>>;

export default LayoutLargeFlower;
export { LayoutLargeFlower };
