import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowLinkPlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowLinkPlain: ForwardRefExoticComponent<WindowLinkPlainProps & RefAttributes<SVGSVGElement>>;

export default WindowLinkPlain;
export { WindowLinkPlain };
