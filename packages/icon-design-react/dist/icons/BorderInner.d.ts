import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BorderInnerProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BorderInner: ForwardRefExoticComponent<BorderInnerProps & RefAttributes<SVGSVGElement>>;

export default BorderInner;
export { BorderInner };
