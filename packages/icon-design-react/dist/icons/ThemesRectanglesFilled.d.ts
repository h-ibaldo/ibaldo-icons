import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ThemesRectanglesFilledProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ThemesRectanglesFilled: ForwardRefExoticComponent<ThemesRectanglesFilledProps & RefAttributes<SVGSVGElement>>;

export default ThemesRectanglesFilled;
export { ThemesRectanglesFilled };
