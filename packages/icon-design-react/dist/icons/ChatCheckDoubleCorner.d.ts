import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatCheckDoubleCornerProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatCheckDoubleCorner: ForwardRefExoticComponent<ChatCheckDoubleCornerProps & RefAttributes<SVGSVGElement>>;

export default ChatCheckDoubleCorner;
export { ChatCheckDoubleCorner };
