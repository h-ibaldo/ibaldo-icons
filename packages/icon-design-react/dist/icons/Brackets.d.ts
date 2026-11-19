import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BracketsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Brackets: ForwardRefExoticComponent<BracketsProps & RefAttributes<SVGSVGElement>>;

export default Brackets;
export { Brackets };
