import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AtAlertCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AtAlertCircle: ForwardRefExoticComponent<AtAlertCircleProps & RefAttributes<SVGSVGElement>>;

export default AtAlertCircle;
export { AtAlertCircle };
