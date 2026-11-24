import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatLaughSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatLaughSharp: ForwardRefExoticComponent<ChatLaughSharpProps & RefAttributes<SVGSVGElement>>;

export default ChatLaughSharp;
export { ChatLaughSharp };
