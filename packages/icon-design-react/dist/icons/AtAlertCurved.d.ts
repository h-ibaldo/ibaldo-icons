import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AtAlertCurvedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AtAlertCurved: ForwardRefExoticComponent<AtAlertCurvedProps & RefAttributes<SVGSVGElement>>;

export default AtAlertCurved;
export { AtAlertCurved };
