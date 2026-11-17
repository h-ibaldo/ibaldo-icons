import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatDotsVerticalBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatDotsVerticalBoxy: ForwardRefExoticComponent<ChatDotsVerticalBoxyProps & RefAttributes<SVGSVGElement>>;

export default ChatDotsVerticalBoxy;
export { ChatDotsVerticalBoxy };
