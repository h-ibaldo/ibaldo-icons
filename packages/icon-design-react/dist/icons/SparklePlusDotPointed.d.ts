import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SparklePlusDotPointedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SparklePlusDotPointed: ForwardRefExoticComponent<SparklePlusDotPointedProps & RefAttributes<SVGSVGElement>>;

export default SparklePlusDotPointed;
export { SparklePlusDotPointed };
