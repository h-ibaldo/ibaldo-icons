import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SeparatorVerticalInProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SeparatorVerticalIn: ForwardRefExoticComponent<SeparatorVerticalInProps & RefAttributes<SVGSVGElement>>;

export default SeparatorVerticalIn;
export { SeparatorVerticalIn };
