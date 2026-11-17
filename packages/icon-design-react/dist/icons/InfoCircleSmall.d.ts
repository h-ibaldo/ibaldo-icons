import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface InfoCircleSmallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const InfoCircleSmall: ForwardRefExoticComponent<InfoCircleSmallProps & RefAttributes<SVGSVGElement>>;

export default InfoCircleSmall;
export { InfoCircleSmall };
