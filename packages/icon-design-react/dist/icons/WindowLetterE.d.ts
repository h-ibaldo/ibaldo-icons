import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowLetterEProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowLetterE: ForwardRefExoticComponent<WindowLetterEProps & RefAttributes<SVGSVGElement>>;

export default WindowLetterE;
export { WindowLetterE };
