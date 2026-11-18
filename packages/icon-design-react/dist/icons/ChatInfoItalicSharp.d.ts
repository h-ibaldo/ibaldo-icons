import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatInfoItalicSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatInfoItalicSharp: ForwardRefExoticComponent<ChatInfoItalicSharpProps & RefAttributes<SVGSVGElement>>;

export default ChatInfoItalicSharp;
export { ChatInfoItalicSharp };
