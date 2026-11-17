import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AntennaBracedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AntennaBraced: ForwardRefExoticComponent<AntennaBracedProps & RefAttributes<SVGSVGElement>>;

export default AntennaBraced;
export { AntennaBraced };
