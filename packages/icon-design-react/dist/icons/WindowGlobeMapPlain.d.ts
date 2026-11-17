import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowGlobeMapPlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowGlobeMapPlain: ForwardRefExoticComponent<WindowGlobeMapPlainProps & RefAttributes<SVGSVGElement>>;

export default WindowGlobeMapPlain;
export { WindowGlobeMapPlain };
