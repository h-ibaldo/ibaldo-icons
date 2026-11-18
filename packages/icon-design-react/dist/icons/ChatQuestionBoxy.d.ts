import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatQuestionBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatQuestionBoxy: ForwardRefExoticComponent<ChatQuestionBoxyProps & RefAttributes<SVGSVGElement>>;

export default ChatQuestionBoxy;
export { ChatQuestionBoxy };
