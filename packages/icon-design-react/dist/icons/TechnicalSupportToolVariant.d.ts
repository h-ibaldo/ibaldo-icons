import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TechnicalSupportToolVariantProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TechnicalSupportToolVariant: ForwardRefExoticComponent<TechnicalSupportToolVariantProps & RefAttributes<SVGSVGElement>>;

export default TechnicalSupportToolVariant;
export { TechnicalSupportToolVariant };
