import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatCheckCornerSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatCheckCornerSharp: ForwardRefExoticComponent<ChatCheckCornerSharpProps & RefAttributes<SVGSVGElement>>;

export default ChatCheckCornerSharp;
export { ChatCheckCornerSharp };
