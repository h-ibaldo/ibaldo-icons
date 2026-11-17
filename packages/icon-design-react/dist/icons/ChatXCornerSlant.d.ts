import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatXCornerSlantProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatXCornerSlant: ForwardRefExoticComponent<ChatXCornerSlantProps & RefAttributes<SVGSVGElement>>;

export default ChatXCornerSlant;
export { ChatXCornerSlant };
