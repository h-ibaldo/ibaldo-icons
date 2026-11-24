import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackHeartCornerSlantProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackHeartCornerSlant: ForwardRefExoticComponent<ChatStackHeartCornerSlantProps & RefAttributes<SVGSVGElement>>;

export default ChatStackHeartCornerSlant;
export { ChatStackHeartCornerSlant };
