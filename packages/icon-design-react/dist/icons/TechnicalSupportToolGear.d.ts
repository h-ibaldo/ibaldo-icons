import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TechnicalSupportToolGearProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TechnicalSupportToolGear: ForwardRefExoticComponent<TechnicalSupportToolGearProps & RefAttributes<SVGSVGElement>>;

export default TechnicalSupportToolGear;
export { TechnicalSupportToolGear };
