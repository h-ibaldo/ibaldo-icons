import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowChatRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowChatRound: ForwardRefExoticComponent<WindowChatRoundProps & RefAttributes<SVGSVGElement>>;

export default WindowChatRound;
export { WindowChatRound };
