import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowLetterWProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowLetterW: ForwardRefExoticComponent<WindowLetterWProps & RefAttributes<SVGSVGElement>>;

export default WindowLetterW;
export { WindowLetterW };
