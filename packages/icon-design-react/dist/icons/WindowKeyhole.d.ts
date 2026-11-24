import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowKeyholeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowKeyhole: ForwardRefExoticComponent<WindowKeyholeProps & RefAttributes<SVGSVGElement>>;

export default WindowKeyhole;
export { WindowKeyhole };
