import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatEqualsSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatEqualsSharp: ForwardRefExoticComponent<ChatEqualsSharpProps & RefAttributes<SVGSVGElement>>;

export default ChatEqualsSharp;
export { ChatEqualsSharp };
