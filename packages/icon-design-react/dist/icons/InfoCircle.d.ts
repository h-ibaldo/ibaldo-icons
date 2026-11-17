import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface InfoCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const InfoCircle: ForwardRefExoticComponent<InfoCircleProps & RefAttributes<SVGSVGElement>>;

export default InfoCircle;
export { InfoCircle };
