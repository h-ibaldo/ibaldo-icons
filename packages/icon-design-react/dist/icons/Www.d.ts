import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WwwProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Www: ForwardRefExoticComponent<WwwProps & RefAttributes<SVGSVGElement>>;

export default Www;
export { Www };
