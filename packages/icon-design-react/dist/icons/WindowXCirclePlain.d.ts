import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowXCirclePlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowXCirclePlain: ForwardRefExoticComponent<WindowXCirclePlainProps & RefAttributes<SVGSVGElement>>;

export default WindowXCirclePlain;
export { WindowXCirclePlain };
