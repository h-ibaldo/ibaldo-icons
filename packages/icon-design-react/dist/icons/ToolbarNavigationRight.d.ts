import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ToolbarNavigationRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ToolbarNavigationRight: ForwardRefExoticComponent<ToolbarNavigationRightProps & RefAttributes<SVGSVGElement>>;

export default ToolbarNavigationRight;
export { ToolbarNavigationRight };
