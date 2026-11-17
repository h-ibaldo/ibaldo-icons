import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SirenAlert2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SirenAlert2: ForwardRefExoticComponent<SirenAlert2Props & RefAttributes<SVGSVGElement>>;

export default SirenAlert2;
export { SirenAlert2 };
