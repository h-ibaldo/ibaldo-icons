import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface OptionsRadioCheckXProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const OptionsRadioCheckX: ForwardRefExoticComponent<OptionsRadioCheckXProps & RefAttributes<SVGSVGElement>>;

export default OptionsRadioCheckX;
export { OptionsRadioCheckX };
