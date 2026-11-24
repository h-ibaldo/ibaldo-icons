import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatLetterTProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatLetterT: ForwardRefExoticComponent<ChatLetterTProps & RefAttributes<SVGSVGElement>>;

export default ChatLetterT;
export { ChatLetterT };
