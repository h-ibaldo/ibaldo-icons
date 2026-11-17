import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowLetterXBareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowLetterXBare: ForwardRefExoticComponent<WindowLetterXBareProps & RefAttributes<SVGSVGElement>>;

export default WindowLetterXBare;
export { WindowLetterXBare };
