import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatWarningSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatWarningSharp: ForwardRefExoticComponent<ChatWarningSharpProps & RefAttributes<SVGSVGElement>>;

export default ChatWarningSharp;
export { ChatWarningSharp };
