import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface RulerProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Ruler: ForwardRefExoticComponent<RulerProps & RefAttributes<SVGSVGElement>>;

export default Ruler;
export { Ruler };
