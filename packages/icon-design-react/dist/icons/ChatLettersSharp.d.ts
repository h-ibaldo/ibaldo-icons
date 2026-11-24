import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatLettersSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatLettersSharp: ForwardRefExoticComponent<ChatLettersSharpProps & RefAttributes<SVGSVGElement>>;

export default ChatLettersSharp;
export { ChatLettersSharp };
