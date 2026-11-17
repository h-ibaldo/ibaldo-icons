import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AtPlusTallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AtPlusTall: ForwardRefExoticComponent<AtPlusTallProps & RefAttributes<SVGSVGElement>>;

export default AtPlusTall;
export { AtPlusTall };
