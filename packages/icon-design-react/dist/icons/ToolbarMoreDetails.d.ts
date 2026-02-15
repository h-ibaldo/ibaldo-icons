import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ToolbarMoreDetailsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ToolbarMoreDetails: ForwardRefExoticComponent<ToolbarMoreDetailsProps & RefAttributes<SVGSVGElement>>;

export default ToolbarMoreDetails;
export { ToolbarMoreDetails };
