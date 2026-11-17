import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AtXTallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AtXTall: ForwardRefExoticComponent<AtXTallProps & RefAttributes<SVGSVGElement>>;

export default AtXTall;
export { AtXTall };
