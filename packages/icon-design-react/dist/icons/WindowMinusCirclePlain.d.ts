import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowMinusCirclePlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowMinusCirclePlain: ForwardRefExoticComponent<WindowMinusCirclePlainProps & RefAttributes<SVGSVGElement>>;

export default WindowMinusCirclePlain;
export { WindowMinusCirclePlain };
