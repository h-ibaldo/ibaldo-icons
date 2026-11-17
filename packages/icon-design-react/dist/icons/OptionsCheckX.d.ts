import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface OptionsCheckXProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const OptionsCheckX: ForwardRefExoticComponent<OptionsCheckXProps & RefAttributes<SVGSVGElement>>;

export default OptionsCheckX;
export { OptionsCheckX };
