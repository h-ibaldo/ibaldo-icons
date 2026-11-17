import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bell5PlusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bell5Plus: ForwardRefExoticComponent<Bell5PlusProps & RefAttributes<SVGSVGElement>>;

export default Bell5Plus;
export { Bell5Plus };
