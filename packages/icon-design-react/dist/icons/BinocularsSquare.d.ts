import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BinocularsSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BinocularsSquare: ForwardRefExoticComponent<BinocularsSquareProps & RefAttributes<SVGSVGElement>>;

export default BinocularsSquare;
export { BinocularsSquare };
