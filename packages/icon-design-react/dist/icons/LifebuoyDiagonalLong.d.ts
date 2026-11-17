import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LifebuoyDiagonalLongProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LifebuoyDiagonalLong: ForwardRefExoticComponent<LifebuoyDiagonalLongProps & RefAttributes<SVGSVGElement>>;

export default LifebuoyDiagonalLong;
export { LifebuoyDiagonalLong };
