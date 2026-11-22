import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SquareDoubleArrowLeftProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SquareDoubleArrowLeft: ForwardRefExoticComponent<SquareDoubleArrowLeftProps & RefAttributes<SVGSVGElement>>;

export default SquareDoubleArrowLeft;
export { SquareDoubleArrowLeft };
