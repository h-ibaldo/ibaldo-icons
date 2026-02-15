import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Heart3FilledDotsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Heart3FilledDots: ForwardRefExoticComponent<Heart3FilledDotsProps & RefAttributes<SVGSVGElement>>;

export default Heart3FilledDots;
export { Heart3FilledDots };
