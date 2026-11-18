import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatDotsVerticalBrokenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatDotsVerticalBroken: ForwardRefExoticComponent<ChatDotsVerticalBrokenProps & RefAttributes<SVGSVGElement>>;

export default ChatDotsVerticalBroken;
export { ChatDotsVerticalBroken };
