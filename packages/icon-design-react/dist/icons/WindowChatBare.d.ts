import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowChatBareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowChatBare: ForwardRefExoticComponent<WindowChatBareProps & RefAttributes<SVGSVGElement>>;

export default WindowChatBare;
export { WindowChatBare };
