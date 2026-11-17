import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AtPlusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AtPlus: ForwardRefExoticComponent<AtPlusProps & RefAttributes<SVGSVGElement>>;

export default AtPlus;
export { AtPlus };
