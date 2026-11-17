import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TechnicalSupportToolsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TechnicalSupportTools: ForwardRefExoticComponent<TechnicalSupportToolsProps & RefAttributes<SVGSVGElement>>;

export default TechnicalSupportTools;
export { TechnicalSupportTools };
