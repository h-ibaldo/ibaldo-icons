import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AtTallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AtTall: ForwardRefExoticComponent<AtTallProps & RefAttributes<SVGSVGElement>>;

export default AtTall;
export { AtTall };
