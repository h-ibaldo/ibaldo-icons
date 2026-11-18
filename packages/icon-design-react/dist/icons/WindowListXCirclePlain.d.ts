import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowListXCirclePlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowListXCirclePlain: ForwardRefExoticComponent<WindowListXCirclePlainProps & RefAttributes<SVGSVGElement>>;

export default WindowListXCirclePlain;
export { WindowListXCirclePlain };
