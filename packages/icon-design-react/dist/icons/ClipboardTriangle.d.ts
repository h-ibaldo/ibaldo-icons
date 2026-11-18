import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClipboardTriangleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClipboardTriangle: ForwardRefExoticComponent<ClipboardTriangleProps & RefAttributes<SVGSVGElement>>;

export default ClipboardTriangle;
export { ClipboardTriangle };
