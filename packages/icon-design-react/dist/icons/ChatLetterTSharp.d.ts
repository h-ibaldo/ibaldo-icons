import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatLetterTSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatLetterTSharp: ForwardRefExoticComponent<ChatLetterTSharpProps & RefAttributes<SVGSVGElement>>;

export default ChatLetterTSharp;
export { ChatLetterTSharp };
