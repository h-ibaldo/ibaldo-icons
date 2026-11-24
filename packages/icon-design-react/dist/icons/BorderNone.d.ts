import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BorderNoneProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BorderNone: ForwardRefExoticComponent<BorderNoneProps & RefAttributes<SVGSVGElement>>;

export default BorderNone;
export { BorderNone };
