import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ThemesSquaresFilledProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ThemesSquaresFilled: ForwardRefExoticComponent<ThemesSquaresFilledProps & RefAttributes<SVGSVGElement>>;

export default ThemesSquaresFilled;
export { ThemesSquaresFilled };
