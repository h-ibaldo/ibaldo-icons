import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface OptionsCheckInfoProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const OptionsCheckInfo: ForwardRefExoticComponent<OptionsCheckInfoProps & RefAttributes<SVGSVGElement>>;

export default OptionsCheckInfo;
export { OptionsCheckInfo };
