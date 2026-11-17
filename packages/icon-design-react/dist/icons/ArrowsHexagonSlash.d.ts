import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowsHexagonSlashProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowsHexagonSlash: ForwardRefExoticComponent<ArrowsHexagonSlashProps & RefAttributes<SVGSVGElement>>;

export default ArrowsHexagonSlash;
export { ArrowsHexagonSlash };
