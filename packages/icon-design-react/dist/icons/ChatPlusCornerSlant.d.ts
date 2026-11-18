import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatPlusCornerSlantProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatPlusCornerSlant: ForwardRefExoticComponent<ChatPlusCornerSlantProps & RefAttributes<SVGSVGElement>>;

export default ChatPlusCornerSlant;
export { ChatPlusCornerSlant };
