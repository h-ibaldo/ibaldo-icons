import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStarCornerSlantProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStarCornerSlant: ForwardRefExoticComponent<ChatStarCornerSlantProps & RefAttributes<SVGSVGElement>>;

export default ChatStarCornerSlant;
export { ChatStarCornerSlant };
