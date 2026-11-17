import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ToggleOnInsetProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ToggleOnInset: ForwardRefExoticComponent<ToggleOnInsetProps & RefAttributes<SVGSVGElement>>;

export default ToggleOnInset;
export { ToggleOnInset };
