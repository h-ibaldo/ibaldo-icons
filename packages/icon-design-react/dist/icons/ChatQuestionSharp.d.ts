import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatQuestionSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatQuestionSharp: ForwardRefExoticComponent<ChatQuestionSharpProps & RefAttributes<SVGSVGElement>>;

export default ChatQuestionSharp;
export { ChatQuestionSharp };
