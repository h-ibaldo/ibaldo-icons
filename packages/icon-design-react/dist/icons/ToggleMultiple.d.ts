import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ToggleMultipleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ToggleMultiple: ForwardRefExoticComponent<ToggleMultipleProps & RefAttributes<SVGSVGElement>>;

export default ToggleMultiple;
export { ToggleMultiple };
