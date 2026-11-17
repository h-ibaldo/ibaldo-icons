import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowPlusCenterPlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowPlusCenterPlain: ForwardRefExoticComponent<WindowPlusCenterPlainProps & RefAttributes<SVGSVGElement>>;

export default WindowPlusCenterPlain;
export { WindowPlusCenterPlain };
