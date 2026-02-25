import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ToolbarNavigationTop2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ToolbarNavigationTop2: ForwardRefExoticComponent<ToolbarNavigationTop2Props & RefAttributes<SVGSVGElement>>;

export default ToolbarNavigationTop2;
export { ToolbarNavigationTop2 };
