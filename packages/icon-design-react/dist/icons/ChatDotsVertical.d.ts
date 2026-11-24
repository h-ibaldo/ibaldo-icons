import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatDotsVerticalProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatDotsVertical: ForwardRefExoticComponent<ChatDotsVerticalProps & RefAttributes<SVGSVGElement>>;

export default ChatDotsVertical;
export { ChatDotsVertical };
