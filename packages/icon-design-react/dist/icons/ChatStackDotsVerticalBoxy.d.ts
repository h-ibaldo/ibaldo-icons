import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackDotsVerticalBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackDotsVerticalBoxy: ForwardRefExoticComponent<ChatStackDotsVerticalBoxyProps & RefAttributes<SVGSVGElement>>;

export default ChatStackDotsVerticalBoxy;
export { ChatStackDotsVerticalBoxy };
