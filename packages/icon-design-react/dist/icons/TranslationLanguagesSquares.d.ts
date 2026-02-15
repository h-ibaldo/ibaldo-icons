import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TranslationLanguagesSquaresProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TranslationLanguagesSquares: ForwardRefExoticComponent<TranslationLanguagesSquaresProps & RefAttributes<SVGSVGElement>>;

export default TranslationLanguagesSquares;
export { TranslationLanguagesSquares };
