import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BinocularsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Binoculars: ForwardRefExoticComponent<BinocularsProps & RefAttributes<SVGSVGElement>>;

export default Binoculars;
export { Binoculars };
