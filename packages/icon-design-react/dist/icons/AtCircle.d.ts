import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AtCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AtCircle: ForwardRefExoticComponent<AtCircleProps & RefAttributes<SVGSVGElement>>;

export default AtCircle;
export { AtCircle };
