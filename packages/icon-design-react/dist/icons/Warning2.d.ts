import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Warning2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Warning2: ForwardRefExoticComponent<Warning2Props & RefAttributes<SVGSVGElement>>;

export default Warning2;
export { Warning2 };
