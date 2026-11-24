import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatXCircleSlantProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatXCircleSlant: ForwardRefExoticComponent<ChatXCircleSlantProps & RefAttributes<SVGSVGElement>>;

export default ChatXCircleSlant;
export { ChatXCircleSlant };
