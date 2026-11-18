import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BorderOuterProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BorderOuter: ForwardRefExoticComponent<BorderOuterProps & RefAttributes<SVGSVGElement>>;

export default BorderOuter;
export { BorderOuter };
