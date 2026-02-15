import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ToolbarNavigationTopProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ToolbarNavigationTop: ForwardRefExoticComponent<ToolbarNavigationTopProps & RefAttributes<SVGSVGElement>>;

export default ToolbarNavigationTop;
export { ToolbarNavigationTop };
