import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface InfoSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const InfoSquare: ForwardRefExoticComponent<InfoSquareProps & RefAttributes<SVGSVGElement>>;

export default InfoSquare;
export { InfoSquare };
