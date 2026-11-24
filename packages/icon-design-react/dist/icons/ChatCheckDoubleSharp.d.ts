import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatCheckDoubleSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatCheckDoubleSharp: ForwardRefExoticComponent<ChatCheckDoubleSharpProps & RefAttributes<SVGSVGElement>>;

export default ChatCheckDoubleSharp;
export { ChatCheckDoubleSharp };
