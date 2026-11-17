import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Warning3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Warning3: ForwardRefExoticComponent<Warning3Props & RefAttributes<SVGSVGElement>>;

export default Warning3;
export { Warning3 };
