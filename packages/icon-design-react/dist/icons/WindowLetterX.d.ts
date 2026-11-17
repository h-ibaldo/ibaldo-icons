import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowLetterXProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowLetterX: ForwardRefExoticComponent<WindowLetterXProps & RefAttributes<SVGSVGElement>>;

export default WindowLetterX;
export { WindowLetterX };
