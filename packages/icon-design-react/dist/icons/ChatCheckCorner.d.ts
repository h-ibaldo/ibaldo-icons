import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatCheckCornerProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatCheckCorner: ForwardRefExoticComponent<ChatCheckCornerProps & RefAttributes<SVGSVGElement>>;

export default ChatCheckCorner;
export { ChatCheckCorner };
