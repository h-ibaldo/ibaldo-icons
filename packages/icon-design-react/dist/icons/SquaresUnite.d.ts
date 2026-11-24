import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SquaresUniteProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SquaresUnite: ForwardRefExoticComponent<SquaresUniteProps & RefAttributes<SVGSVGElement>>;

export default SquaresUnite;
export { SquaresUnite };
