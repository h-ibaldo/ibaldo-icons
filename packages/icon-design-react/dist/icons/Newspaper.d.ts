import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface NewspaperProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Newspaper: ForwardRefExoticComponent<NewspaperProps & RefAttributes<SVGSVGElement>>;

export default Newspaper;
export { Newspaper };
