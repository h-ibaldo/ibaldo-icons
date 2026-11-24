import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AtEqualTallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AtEqualTall: ForwardRefExoticComponent<AtEqualTallProps & RefAttributes<SVGSVGElement>>;

export default AtEqualTall;
export { AtEqualTall };
