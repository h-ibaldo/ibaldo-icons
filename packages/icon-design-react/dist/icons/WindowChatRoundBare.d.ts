import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowChatRoundBareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowChatRoundBare: ForwardRefExoticComponent<WindowChatRoundBareProps & RefAttributes<SVGSVGElement>>;

export default WindowChatRoundBare;
export { WindowChatRoundBare };
