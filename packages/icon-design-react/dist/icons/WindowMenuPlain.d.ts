import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowMenuPlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowMenuPlain: ForwardRefExoticComponent<WindowMenuPlainProps & RefAttributes<SVGSVGElement>>;

export default WindowMenuPlain;
export { WindowMenuPlain };
