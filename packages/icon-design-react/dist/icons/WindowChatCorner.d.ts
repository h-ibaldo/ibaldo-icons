import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowChatCornerProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowChatCorner: ForwardRefExoticComponent<WindowChatCornerProps & RefAttributes<SVGSVGElement>>;

export default WindowChatCorner;
export { WindowChatCorner };
