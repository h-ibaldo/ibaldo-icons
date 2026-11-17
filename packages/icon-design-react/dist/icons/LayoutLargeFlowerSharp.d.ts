import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LayoutLargeFlowerSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LayoutLargeFlowerSharp: ForwardRefExoticComponent<LayoutLargeFlowerSharpProps & RefAttributes<SVGSVGElement>>;

export default LayoutLargeFlowerSharp;
export { LayoutLargeFlowerSharp };
