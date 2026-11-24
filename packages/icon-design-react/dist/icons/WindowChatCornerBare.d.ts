import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowChatCornerBareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowChatCornerBare: ForwardRefExoticComponent<WindowChatCornerBareProps & RefAttributes<SVGSVGElement>>;

export default WindowChatCornerBare;
export { WindowChatCornerBare };
