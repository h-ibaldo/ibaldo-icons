import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatXCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatXCircle: ForwardRefExoticComponent<ChatXCircleProps & RefAttributes<SVGSVGElement>>;

export default ChatXCircle;
export { ChatXCircle };
