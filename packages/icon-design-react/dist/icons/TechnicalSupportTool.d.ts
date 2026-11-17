import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TechnicalSupportToolProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TechnicalSupportTool: ForwardRefExoticComponent<TechnicalSupportToolProps & RefAttributes<SVGSVGElement>>;

export default TechnicalSupportTool;
export { TechnicalSupportTool };
