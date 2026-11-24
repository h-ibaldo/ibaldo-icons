import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowCloudPuffyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowCloudPuffy: ForwardRefExoticComponent<WindowCloudPuffyProps & RefAttributes<SVGSVGElement>>;

export default WindowCloudPuffy;
export { WindowCloudPuffy };
