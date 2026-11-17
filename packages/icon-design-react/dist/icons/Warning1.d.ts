import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Warning1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Warning1: ForwardRefExoticComponent<Warning1Props & RefAttributes<SVGSVGElement>>;

export default Warning1;
export { Warning1 };
