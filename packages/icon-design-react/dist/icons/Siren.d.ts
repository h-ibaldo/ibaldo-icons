import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SirenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Siren: ForwardRefExoticComponent<SirenProps & RefAttributes<SVGSVGElement>>;

export default Siren;
export { Siren };
