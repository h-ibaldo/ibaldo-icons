import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ToggleOffInsetProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ToggleOffInset: ForwardRefExoticComponent<ToggleOffInsetProps & RefAttributes<SVGSVGElement>>;

export default ToggleOffInset;
export { ToggleOffInset };
