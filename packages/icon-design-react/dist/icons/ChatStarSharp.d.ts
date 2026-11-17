import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStarSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStarSharp: ForwardRefExoticComponent<ChatStarSharpProps & RefAttributes<SVGSVGElement>>;

export default ChatStarSharp;
export { ChatStarSharp };
