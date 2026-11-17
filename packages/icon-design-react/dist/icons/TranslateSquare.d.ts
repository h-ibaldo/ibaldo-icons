import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TranslateSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TranslateSquare: ForwardRefExoticComponent<TranslateSquareProps & RefAttributes<SVGSVGElement>>;

export default TranslateSquare;
export { TranslateSquare };
