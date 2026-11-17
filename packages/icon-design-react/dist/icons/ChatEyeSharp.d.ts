import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatEyeSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatEyeSharp: ForwardRefExoticComponent<ChatEyeSharpProps & RefAttributes<SVGSVGElement>>;

export default ChatEyeSharp;
export { ChatEyeSharp };
