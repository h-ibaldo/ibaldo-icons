import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowListMinusCirclePlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowListMinusCirclePlain: ForwardRefExoticComponent<WindowListMinusCirclePlainProps & RefAttributes<SVGSVGElement>>;

export default WindowListMinusCirclePlain;
export { WindowListMinusCirclePlain };
