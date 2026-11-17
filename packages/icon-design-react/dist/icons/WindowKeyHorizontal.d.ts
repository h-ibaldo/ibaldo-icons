import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowKeyHorizontalProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowKeyHorizontal: ForwardRefExoticComponent<WindowKeyHorizontalProps & RefAttributes<SVGSVGElement>>;

export default WindowKeyHorizontal;
export { WindowKeyHorizontal };
