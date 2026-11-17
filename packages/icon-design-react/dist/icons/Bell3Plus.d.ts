import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bell3PlusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bell3Plus: ForwardRefExoticComponent<Bell3PlusProps & RefAttributes<SVGSVGElement>>;

export default Bell3Plus;
export { Bell3Plus };
