import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface OptionsDotsAsteriskProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const OptionsDotsAsterisk: ForwardRefExoticComponent<OptionsDotsAsteriskProps & RefAttributes<SVGSVGElement>>;

export default OptionsDotsAsterisk;
export { OptionsDotsAsterisk };
