import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatInfoProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatInfo: ForwardRefExoticComponent<ChatInfoProps & RefAttributes<SVGSVGElement>>;

export default ChatInfo;
export { ChatInfo };
