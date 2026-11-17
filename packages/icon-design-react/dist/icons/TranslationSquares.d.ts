import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TranslationSquaresProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TranslationSquares: ForwardRefExoticComponent<TranslationSquaresProps & RefAttributes<SVGSVGElement>>;

export default TranslationSquares;
export { TranslationSquares };
