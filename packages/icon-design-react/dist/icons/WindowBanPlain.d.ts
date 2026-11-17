import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowBanPlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowBanPlain: ForwardRefExoticComponent<WindowBanPlainProps & RefAttributes<SVGSVGElement>>;

export default WindowBanPlain;
export { WindowBanPlain };
