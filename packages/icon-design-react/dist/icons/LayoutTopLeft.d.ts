import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LayoutTopLeftProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LayoutTopLeft: ForwardRefExoticComponent<LayoutTopLeftProps & RefAttributes<SVGSVGElement>>;

export default LayoutTopLeft;
export { LayoutTopLeft };
