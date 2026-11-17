import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TechnicalSupportGearProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TechnicalSupportGear: ForwardRefExoticComponent<TechnicalSupportGearProps & RefAttributes<SVGSVGElement>>;

export default TechnicalSupportGear;
export { TechnicalSupportGear };
