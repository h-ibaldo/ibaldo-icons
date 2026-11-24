import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatLetterTBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatLetterTBoxy: ForwardRefExoticComponent<ChatLetterTBoxyProps & RefAttributes<SVGSVGElement>>;

export default ChatLetterTBoxy;
export { ChatLetterTBoxy };
