import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TriangleWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TriangleWide: ForwardRefExoticComponent<TriangleWideProps & RefAttributes<SVGSVGElement>>;

export default TriangleWide;
export { TriangleWide };
