import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface InfoSquareSmallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const InfoSquareSmall: ForwardRefExoticComponent<InfoSquareSmallProps & RefAttributes<SVGSVGElement>>;

export default InfoSquareSmall;
export { InfoSquareSmall };
