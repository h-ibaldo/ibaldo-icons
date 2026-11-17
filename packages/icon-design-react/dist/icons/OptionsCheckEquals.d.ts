import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface OptionsCheckEqualsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const OptionsCheckEquals: ForwardRefExoticComponent<OptionsCheckEqualsProps & RefAttributes<SVGSVGElement>>;

export default OptionsCheckEquals;
export { OptionsCheckEquals };
