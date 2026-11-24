import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PilcrowSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PilcrowSquare: ForwardRefExoticComponent<PilcrowSquareProps & RefAttributes<SVGSVGElement>>;

export default PilcrowSquare;
export { PilcrowSquare };
