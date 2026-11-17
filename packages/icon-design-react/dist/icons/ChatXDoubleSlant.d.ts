import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatXDoubleSlantProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatXDoubleSlant: ForwardRefExoticComponent<ChatXDoubleSlantProps & RefAttributes<SVGSVGElement>>;

export default ChatXDoubleSlant;
export { ChatXDoubleSlant };
