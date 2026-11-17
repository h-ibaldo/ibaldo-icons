import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowLetterEBareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowLetterEBare: ForwardRefExoticComponent<WindowLetterEBareProps & RefAttributes<SVGSVGElement>>;

export default WindowLetterEBare;
export { WindowLetterEBare };
