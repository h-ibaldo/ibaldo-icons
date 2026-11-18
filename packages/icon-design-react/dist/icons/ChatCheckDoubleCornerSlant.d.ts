import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatCheckDoubleCornerSlantProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatCheckDoubleCornerSlant: ForwardRefExoticComponent<ChatCheckDoubleCornerSlantProps & RefAttributes<SVGSVGElement>>;

export default ChatCheckDoubleCornerSlant;
export { ChatCheckDoubleCornerSlant };
