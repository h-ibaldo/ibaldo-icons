import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LifebuoyDiagonalProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LifebuoyDiagonal: ForwardRefExoticComponent<LifebuoyDiagonalProps & RefAttributes<SVGSVGElement>>;

export default LifebuoyDiagonal;
export { LifebuoyDiagonal };
