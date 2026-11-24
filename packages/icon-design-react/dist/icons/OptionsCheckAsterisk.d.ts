import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface OptionsCheckAsteriskProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const OptionsCheckAsterisk: ForwardRefExoticComponent<OptionsCheckAsteriskProps & RefAttributes<SVGSVGElement>>;

export default OptionsCheckAsterisk;
export { OptionsCheckAsterisk };
