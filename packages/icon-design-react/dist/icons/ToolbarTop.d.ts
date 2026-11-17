import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ToolbarTopProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ToolbarTop: ForwardRefExoticComponent<ToolbarTopProps & RefAttributes<SVGSVGElement>>;

export default ToolbarTop;
export { ToolbarTop };
