import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface RestoreSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const RestoreSquare: ForwardRefExoticComponent<RestoreSquareProps & RefAttributes<SVGSVGElement>>;

export default RestoreSquare;
export { RestoreSquare };
