import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackInfoProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackInfo: ForwardRefExoticComponent<ChatStackInfoProps & RefAttributes<SVGSVGElement>>;

export default ChatStackInfo;
export { ChatStackInfo };
