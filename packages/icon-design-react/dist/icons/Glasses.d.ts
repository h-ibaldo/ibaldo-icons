import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GlassesProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Glasses: ForwardRefExoticComponent<GlassesProps & RefAttributes<SVGSVGElement>>;

export default Glasses;
export { Glasses };
