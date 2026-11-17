import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AtPlusCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AtPlusCircle: ForwardRefExoticComponent<AtPlusCircleProps & RefAttributes<SVGSVGElement>>;

export default AtPlusCircle;
export { AtPlusCircle };
