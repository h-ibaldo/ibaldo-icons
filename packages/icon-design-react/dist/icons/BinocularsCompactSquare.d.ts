import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BinocularsCompactSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BinocularsCompactSquare: ForwardRefExoticComponent<BinocularsCompactSquareProps & RefAttributes<SVGSVGElement>>;

export default BinocularsCompactSquare;
export { BinocularsCompactSquare };
