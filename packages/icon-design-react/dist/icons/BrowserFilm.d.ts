import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BrowserFilmProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BrowserFilm: ForwardRefExoticComponent<BrowserFilmProps & RefAttributes<SVGSVGElement>>;

export default BrowserFilm;
export { BrowserFilm };
