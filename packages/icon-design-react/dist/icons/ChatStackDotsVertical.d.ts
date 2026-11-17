import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackDotsVerticalProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackDotsVertical: ForwardRefExoticComponent<ChatStackDotsVerticalProps & RefAttributes<SVGSVGElement>>;

export default ChatStackDotsVertical;
export { ChatStackDotsVertical };
