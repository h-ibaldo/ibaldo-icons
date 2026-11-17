import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TriangleOffWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TriangleOffWide: ForwardRefExoticComponent<TriangleOffWideProps & RefAttributes<SVGSVGElement>>;

export default TriangleOffWide;
export { TriangleOffWide };
