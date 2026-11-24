import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowChatProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowChat: ForwardRefExoticComponent<WindowChatProps & RefAttributes<SVGSVGElement>>;

export default WindowChat;
export { WindowChat };
