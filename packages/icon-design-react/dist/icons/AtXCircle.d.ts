import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AtXCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AtXCircle: ForwardRefExoticComponent<AtXCircleProps & RefAttributes<SVGSVGElement>>;

export default AtXCircle;
export { AtXCircle };
