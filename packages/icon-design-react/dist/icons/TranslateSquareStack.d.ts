import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TranslateSquareStackProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TranslateSquareStack: ForwardRefExoticComponent<TranslateSquareStackProps & RefAttributes<SVGSVGElement>>;

export default TranslateSquareStack;
export { TranslateSquareStack };
