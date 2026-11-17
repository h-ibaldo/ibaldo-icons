import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AtCheckTallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AtCheckTall: ForwardRefExoticComponent<AtCheckTallProps & RefAttributes<SVGSVGElement>>;

export default AtCheckTall;
export { AtCheckTall };
