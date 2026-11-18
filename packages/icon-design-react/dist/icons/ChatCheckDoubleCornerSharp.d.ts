import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatCheckDoubleCornerSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatCheckDoubleCornerSharp: ForwardRefExoticComponent<ChatCheckDoubleCornerSharpProps & RefAttributes<SVGSVGElement>>;

export default ChatCheckDoubleCornerSharp;
export { ChatCheckDoubleCornerSharp };
