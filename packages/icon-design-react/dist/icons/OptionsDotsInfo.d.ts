import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface OptionsDotsInfoProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const OptionsDotsInfo: ForwardRefExoticComponent<OptionsDotsInfoProps & RefAttributes<SVGSVGElement>>;

export default OptionsDotsInfo;
export { OptionsDotsInfo };
