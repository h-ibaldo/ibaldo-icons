import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowButtonProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowButton: ForwardRefExoticComponent<WindowButtonProps & RefAttributes<SVGSVGElement>>;

export default WindowButton;
export { WindowButton };
