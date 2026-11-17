import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatCheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatCheck: ForwardRefExoticComponent<ChatCheckProps & RefAttributes<SVGSVGElement>>;

export default ChatCheck;
export { ChatCheck };
