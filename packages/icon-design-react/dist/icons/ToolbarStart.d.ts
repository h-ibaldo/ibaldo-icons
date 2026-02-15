import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ToolbarStartProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ToolbarStart: ForwardRefExoticComponent<ToolbarStartProps & RefAttributes<SVGSVGElement>>;

export default ToolbarStart;
export { ToolbarStart };
